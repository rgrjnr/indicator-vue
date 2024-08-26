import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

export default defineNuxtPlugin(() => {
    if (process.client) {
        gsap.registerPlugin(SplitText);
        gsap.registerPlugin(ScrambleTextPlugin);
    }

    return {
        provide: {
            gsap,
            SplitText,
            ScrambleTextPlugin,
        },
    };
});
