"use strict";
function mapNode(node, f) {
    return {
        ...node,
        value: f(node.value)
    };
}
function call(f, ...args) {
    return f(...args);
}
function fill(length, value) {
    return Array.from({ length }, () => value);
}
