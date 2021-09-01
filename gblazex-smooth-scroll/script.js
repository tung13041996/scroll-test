SmoothScroll({
    // Scrolling Core
    animationTime: 4000, // [ms]
    stepSize: 10, // [px]

    // Acceleration
    accelerationDelta: 100,  // 50
    accelerationMax: 1,   // 3

    // Keyboard Settings
    keyboardSupport: true,  // option
    arrowScroll: 50,    // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: true, // ignore touchpad by default
    fixedBackground: true,
    excluded: ''
});