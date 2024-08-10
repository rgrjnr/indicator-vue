<template>
    <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils.js";

import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

import { OutsideEdgesGeometry } from "./src/OutsideEdgesGeometry.js";
import { ConditionalEdgesGeometry } from "./src/ConditionalEdgesGeometry.js";
import { ConditionalEdgesShader } from "./src/ConditionalEdgesShader.js";
import { ConditionalLineSegmentsGeometry } from "./src/Lines2/ConditionalLineSegmentsGeometry.js";
import { ConditionalLineMaterial } from "./src/Lines2/ConditionalLineMaterial.js";
import { ColoredShadowMaterial } from "./src/ColoredShadowMaterial.js";

const threeContainer = ref();

// globals
var params = {
    colors: "LIGHT",
    backgroundColor: "#0D171A",
    modelColor: "#0d2a28",
    lineColor: "#E2FDFF",
    shadowColor: "#44491f",

    lit: false,
    opacity: 1,
    threshold: 40,
    display: "THRESHOLD_EDGES",
    displayConditionalEdges: true,
    thickness: 1,
    useThickLines: false,
    model: "ConditionalLineSegmentsGeometry",
};

let camera,
    scene,
    renderer,
    controls,
    edgesModel,
    originalModel,
    backgroundModel,
    conditionalModel,
    shadowModel,
    floor,
    depthModel;

const models = {};
const color = new THREE.Color();
const color2 = new THREE.Color();

const LIGHT_BACKGROUND = 0x0d171a;
const LIGHT_MODEL = 0x0d171a;
const LIGHT_LINES = 0xe2fdff;
const LIGHT_SHADOW = 0x0d171a;

onMounted(async () => {
    await init();
    animate();
});

function updateModel() {
    originalModel = models[params.model];

    initEdgesModel();

    initBackgroundModel();

    initConditionalModel();
}

function mergeObject(object) {
    object.updateMatrixWorld(true);

    const geometry = [];
    object.traverse((c) => {
        if (c.isMesh) {
            const g = c.geometry;
            g.applyMatrix4(c.matrixWorld);
            for (const key in g.attributes) {
                if (key !== "position" && key !== "normal") {
                    g.deleteAttribute(key);
                }
            }
            geometry.push(g.toNonIndexed());
        }
    });

    const mergedGeometries = BufferGeometryUtils.mergeBufferGeometries(geometry, false);
    const mergedGeometry = BufferGeometryUtils.mergeVertices(mergedGeometries).center();

    const group = new THREE.Group();
    const mesh = new THREE.Mesh(mergedGeometry);
    group.add(mesh);
    return group;
}

function initBackgroundModel() {
    if (backgroundModel) {
        backgroundModel.parent.remove(backgroundModel);
        shadowModel.parent.remove(shadowModel);
        depthModel.parent.remove(depthModel);

        backgroundModel.traverse((c) => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });

        shadowModel.traverse((c) => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });

        depthModel.traverse((c) => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });
    }

    if (!originalModel) {
        return;
    }

    backgroundModel = originalModel.clone();
    backgroundModel.traverse((c) => {
        if (c.isMesh) {
            c.material = new THREE.MeshBasicMaterial({ color: LIGHT_MODEL });
            c.material.polygonOffset = true;
            c.material.polygonOffsetFactor = 1;
            c.material.polygonOffsetUnits = 1;
            c.renderOrder = 2;
        }
    });
    scene.add(backgroundModel);

    shadowModel = originalModel.clone();
    shadowModel.traverse((c) => {
        if (c.isMesh) {
            c.material = new ColoredShadowMaterial({ color: LIGHT_MODEL, shininess: 1.0 });
            c.material.polygonOffset = true;
            c.material.polygonOffsetFactor = 1;
            c.material.polygonOffsetUnits = 1;
            c.receiveShadow = true;
            c.renderOrder = 2;
        }
    });
    scene.add(shadowModel);

    depthModel = originalModel.clone();
    depthModel.traverse((c) => {
        if (c.isMesh) {
            c.material = new THREE.MeshBasicMaterial({ color: LIGHT_MODEL });
            c.material.polygonOffset = true;
            c.material.polygonOffsetFactor = 1;
            c.material.polygonOffsetUnits = 1;
            c.material.colorWrite = false;
            c.renderOrder = 1;
        }
    });
    scene.add(depthModel);
}

function initEdgesModel() {
    // remove any previous model
    if (edgesModel) {
        edgesModel.parent.remove(edgesModel);
        edgesModel.traverse((c) => {
            if (c.isMesh) {
                if (Array.isArray(c.material)) {
                    c.material.forEach((m) => m.dispose());
                } else {
                    c.material.dispose();
                }
            }
        });
    }

    // early out if there's no model loaded
    if (!originalModel) {
        return;
    }

    // store the model and add it to the scene to display
    // behind the lines
    edgesModel = originalModel.clone();
    scene.add(edgesModel);

    // early out if we're not displaying any type of edge
    if (params.display === "NONE") {
        edgesModel.visible = false;
        return;
    }

    const meshes = [];
    edgesModel.traverse((c) => {
        if (c.isMesh) {
            meshes.push(c);
        }
    });

    for (const key in meshes) {
        const mesh = meshes[key];
        const parent = mesh.parent;

        let lineGeom;
        if (params.display === "THRESHOLD_EDGES") {
            lineGeom = new THREE.EdgesGeometry(mesh.geometry, params.threshold);
        } else {
            const mergeGeom = mesh.geometry.clone();
            mergeGeom.deleteAttribute("uv");
            mergeGeom.deleteAttribute("uv2");
            lineGeom = new OutsideEdgesGeometry(BufferGeometryUtils.mergeVertices(mergeGeom, 1e-3));
        }

        const line = new THREE.LineSegments(
            lineGeom,
            new THREE.LineBasicMaterial({ color: LIGHT_LINES })
        );
        line.position.copy(mesh.position);
        line.scale.copy(mesh.scale);
        line.rotation.copy(mesh.rotation);

        const thickLineGeom = new LineSegmentsGeometry().fromEdgesGeometry(lineGeom);
        const thickLines = new LineSegments2(
            thickLineGeom,
            new LineMaterial({ color: LIGHT_LINES, linewidth: 3 })
        );
        thickLines.position.copy(mesh.position);
        thickLines.scale.copy(mesh.scale);
        thickLines.rotation.copy(mesh.rotation);

        parent.remove(mesh);
        parent.add(line);
        parent.add(thickLines);
    }
}

function initConditionalModel() {
    // remove the original model
    if (conditionalModel) {
        conditionalModel.parent.remove(conditionalModel);
        conditionalModel.traverse((c) => {
            if (c.isMesh) {
                c.material.dispose();
            }
        });
    }

    // if we have no loaded model then exit
    if (!originalModel) {
        return;
    }

    conditionalModel = originalModel.clone();
    scene.add(conditionalModel);
    conditionalModel.visible = false;

    // get all meshes
    const meshes = [];
    conditionalModel.traverse((c) => {
        if (c.isMesh) {
            meshes.push(c);
        }
    });

    for (const key in meshes) {
        const mesh = meshes[key];
        const parent = mesh.parent;

        // Remove everything but the position attribute
        const mergedGeom = mesh.geometry.clone();
        for (const key in mergedGeom.attributes) {
            if (key !== "position") {
                mergedGeom.deleteAttribute(key);
            }
        }

        // Create the conditional edges geometry and associated material
        const lineGeom = new ConditionalEdgesGeometry(
            BufferGeometryUtils.mergeVertices(mergedGeom)
        );
        const material = new THREE.ShaderMaterial(ConditionalEdgesShader);
        material.uniforms.diffuse.value.set(LIGHT_LINES);

        // Create the line segments objects and replace the mesh
        const line = new THREE.LineSegments(lineGeom, material);
        line.position.copy(mesh.position);
        line.scale.copy(mesh.scale);
        line.rotation.copy(mesh.rotation);

        const thickLineGeom = new ConditionalLineSegmentsGeometry().fromConditionalEdgesGeometry(
            lineGeom
        );
        const thickLines = new LineSegments2(
            thickLineGeom,
            new ConditionalLineMaterial({ color: LIGHT_LINES, linewidth: 2 })
        );
        thickLines.position.copy(mesh.position);
        thickLines.scale.copy(mesh.scale);
        thickLines.rotation.copy(mesh.rotation);

        parent.remove(mesh);
        parent.add(line);
        parent.add(thickLines);
    }
}

async function init() {
    // initialize renderer, scene, camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(LIGHT_BACKGROUND);

    const aspect = window.innerWidth / window.innerHeight;
    const d = 20;

    camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);

    scene.add(camera);
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    threeContainer.value.appendChild(renderer.domElement);

    // Floor
    floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(),
        new THREE.ShadowMaterial({ color: LIGHT_LINES, opacity: 0.25, transparent: true })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.scale.setScalar(20);
    floor.receiveShadow = true;
    scene.add(floor);

    models.ConditionalLineSegmentsGeometry = new GLTFLoader().load("/model/cidade2.glb", (gltf) => {
        const model = mergeObject(gltf.scene);
        model.children[0].geometry.computeBoundingBox();

        models.ConditionalLineSegmentsGeometry = model;
        updateModel();
    });

    window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
}

let angle = 0;
const radius = 10;
const speed = 0.003;

function animate() {
    requestAnimationFrame(animate);

    // Animation variables
    angle += speed;
    camera.position.x = radius * Math.cos(angle);
    camera.position.z = radius * Math.sin(angle);
    camera.lookAt(0, 0, 0);
    let linesColor = LIGHT_LINES;
    let modelColor = LIGHT_MODEL;
    let backgroundColor = LIGHT_BACKGROUND;
    let shadowColor = LIGHT_SHADOW;

    if (conditionalModel) {
        conditionalModel.visible = params.displayConditionalEdges;
        conditionalModel.traverse((c) => {
            if (c.material && c.material.resolution) {
                renderer.getSize(c.material.resolution);
                c.material.resolution.multiplyScalar(window.devicePixelRatio);
                c.material.linewidth = params.thickness;
            }

            if (c.material) {
                c.visible =
                    c instanceof LineSegments2 ? params.useThickLines : !params.useThickLines;
                c.material.uniforms.diffuse.value.set(linesColor);
            }
        });
    }

    if (edgesModel) {
        edgesModel.traverse((c) => {
            if (c.material && c.material.resolution) {
                renderer.getSize(c.material.resolution);
                c.material.resolution.multiplyScalar(window.devicePixelRatio);
                c.material.linewidth = params.thickness;
            }

            if (c.material) {
                c.visible =
                    c instanceof LineSegments2 ? params.useThickLines : !params.useThickLines;
                c.material.color.set(linesColor);
            }
        });
    }

    if (backgroundModel) {
        backgroundModel.visible = !params.lit;
        backgroundModel.traverse((c) => {
            if (c.isMesh) {
                c.material.transparent = params.opacity !== 1.0;
                c.material.opacity = params.opacity;
                c.material.color.set(modelColor);
            }
        });
    }

    if (shadowModel) {
        shadowModel.visible = params.lit;
        shadowModel.traverse((c) => {
            if (c.isMesh) {
                c.material.transparent = params.opacity !== 1.0;
                c.material.opacity = params.opacity;
                c.material.color.set(modelColor);
                c.material.shadowColor.set(shadowColor);
            }
        });
    }

    if (originalModel) {
        floor.position.y = originalModel.children[0].geometry.boundingBox.min.y;
    }

    scene.background.set(backgroundColor);
    floor.material.color.set(shadowColor);
    floor.material.opacity = params.opacity;
    floor.visible = params.lit;

    render();
}

function render() {
    renderer.render(scene, camera);
}
</script>

<style scoped>
.three-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
}
</style>
