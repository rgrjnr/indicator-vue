import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default defineNuxtPlugin(() => {
    if (process.client) {
        gsap.registerPlugin(SplitText);
    }

    return {
        provide: {
            gsap,
            SplitText,
        },
    };
});
