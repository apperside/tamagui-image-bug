var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/tamagui/dist/cjs/polyfills.js
var require_polyfills = __commonJS({
  "../../node_modules/tamagui/dist/cjs/polyfills.js"() {
    "use strict";
    if (typeof requestAnimationFrame === "undefined") {
      globalThis["requestAnimationFrame"] = setImmediate;
    }
    global.cancelAnimationFrame = (x) => {
      try {
        cancelAnimationFrame(x);
      } catch {
      }
    };
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js
var require_LayoutGroupContext = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LayoutGroupContext_exports = {};
    __export2(LayoutGroupContext_exports, {
      LayoutGroupContext: () => LayoutGroupContext
    });
    module2.exports = __toCommonJS2(LayoutGroupContext_exports);
    var import_react = require("react");
    var LayoutGroupContext = (0, import_react.createContext)({});
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext2
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react = require("react");
    var PresenceContext2 = (0, import_react.createContext)(null);
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js
var require_PresenceChild = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceChild_exports = {};
    __export2(PresenceChild_exports, {
      PresenceChild: () => PresenceChild
    });
    module2.exports = __toCommonJS2(PresenceChild_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var React3 = __toESM2(require("react"));
    var import_PresenceContext = require_PresenceContext();
    var PresenceChild = /* @__PURE__ */ __name(({
      children,
      initial,
      isPresent,
      onExitComplete,
      exitVariant,
      enterVariant,
      presenceAffectsLayout
    }) => {
      const presenceChildren = (0, import_core4.useConstant)(newChildrenMap);
      const id = (0, import_core4.useId)() || "";
      const context = React3.useMemo(
        () => {
          return {
            id,
            initial,
            isPresent,
            exitVariant,
            enterVariant,
            onExitComplete: (id2) => {
              presenceChildren.set(id2, true);
              for (const isComplete of presenceChildren.values()) {
                if (!isComplete) {
                  return;
                }
              }
              onExitComplete == null ? void 0 : onExitComplete();
            },
            register: (id2) => {
              presenceChildren.set(id2, false);
              return () => presenceChildren.delete(id2);
            }
          };
        },
        presenceAffectsLayout ? void 0 : [isPresent, exitVariant, enterVariant]
      );
      React3.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
      }, [isPresent]);
      React3.useEffect(() => {
        !isPresent && !presenceChildren.size && (onExitComplete == null ? void 0 : onExitComplete());
      }, [isPresent]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceContext.PresenceContext.Provider, {
        value: context,
        children
      });
    }, "PresenceChild");
    function newChildrenMap() {
      return /* @__PURE__ */ new Map();
    }
    __name(newChildrenMap, "newChildrenMap");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js
var require_AnimatePresence = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AnimatePresence_exports = {};
    __export2(AnimatePresence_exports, {
      AnimatePresence: () => AnimatePresence
    });
    module2.exports = __toCommonJS2(AnimatePresence_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_react = __toESM2(require("react"));
    var import_LayoutGroupContext = require_LayoutGroupContext();
    var import_PresenceChild = require_PresenceChild();
    import_react.default["keep"];
    var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
    var isDev = process.env.NODE_ENV !== "production";
    function updateChildLookup(children, allChildren) {
      const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
      children.forEach((child) => {
        const key = getChildKey(child);
        if (isDev && seenChildren && seenChildren.has(key)) {
          console.warn(`Children of AnimatePresence require unique keys. "${key}" is a duplicate.`);
          seenChildren.add(key);
        }
        allChildren.set(key, child);
      });
    }
    __name(updateChildLookup, "updateChildLookup");
    function onlyElements(children) {
      const filtered = [];
      import_react.Children.forEach(children, (child, index) => {
        if ((0, import_react.isValidElement)(child)) {
          if (!child.key) {
            if (process.env.NODE_ENV === "development") {
              console.warn(`No key given to AnimatePresence child, assigning index as key`);
            }
            filtered.push(
              import_react.default.cloneElement(child, {
                key: index
              })
            );
          } else {
            filtered.push(child);
          }
        }
      });
      return filtered;
    }
    __name(onlyElements, "onlyElements");
    var AnimatePresence = /* @__PURE__ */ __name(({
      children,
      enterVariant,
      exitVariant,
      initial = true,
      onExitComplete,
      exitBeforeEnter,
      presenceAffectsLayout = true
    }) => {
      let forceRender = (0, import_core4.useForceUpdate)();
      const forceRenderLayoutGroup = (0, import_react.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender;
      if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
      const isMounted = (0, import_core4.useIsMounted)();
      const filteredChildren = onlyElements(children);
      let childrenToRender = filteredChildren;
      const exiting = /* @__PURE__ */ new Set();
      const presentChildren = (0, import_react.useRef)(childrenToRender);
      const allChildren = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current;
      const isInitialRender = (0, import_react.useRef)(true);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
      });
      (0, import_core4.useUnmountEffect)(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exiting.clear();
      });
      if (isInitialRender.current) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: true,
            exitVariant,
            enterVariant,
            initial: initial ? void 0 : false,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child)))
        });
      }
      childrenToRender = [...childrenToRender];
      const presentKeys = presentChildren.current.map(getChildKey);
      const targetKeys = filteredChildren.map(getChildKey);
      const numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        }
      }
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1)
          return;
        const child = allChildren.get(key);
        if (!child)
          return;
        const insertionIndex = presentKeys.indexOf(key);
        childrenToRender.splice(
          insertionIndex,
          0,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: false,
            onExitComplete: () => {
              allChildren.delete(key);
              exiting.delete(key);
              const removeIndex = presentChildren.current.findIndex(
                (presentChild) => presentChild.key === key
              );
              presentChildren.current.splice(removeIndex, 1);
              if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                  return;
                forceRender();
                onExitComplete == null ? void 0 : onExitComplete();
              }
            },
            exitVariant,
            enterVariant,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child))
        );
      });
      childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
          isPresent: true,
          exitVariant,
          enterVariant,
          presenceAffectsLayout,
          children: child
        }, getChildKey(child));
      });
      if (process.env.NODE_ENV !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
        console.warn(
          `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.`
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react.cloneElement)(child))
      });
    }, "AnimatePresence");
    AnimatePresence.displayName = "AnimatePresence";
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react.useContext)(import_PresenceContext.PresenceContext);
      if (context === null) {
        return [true, null];
      }
      const { isPresent: isPresent2, onExitComplete, register } = context;
      const id = (0, import_core4.useId)() || "";
      (0, import_react.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      PresenceContext: () => import_PresenceContext.PresenceContext
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AnimatePresence(), module2.exports);
    __reExport2(src_exports, require_usePresence(), module2.exports);
    var import_PresenceContext = require_PresenceContext();
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var compose_refs_exports = {};
    __export2(compose_refs_exports, {
      composeRefs: () => composeRefs,
      useComposedRefs: () => useComposedRefs
    });
    module2.exports = __toCommonJS2(compose_refs_exports);
    var React3 = __toESM2(require("react"));
    function setRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref !== null && ref !== void 0) {
        ;
        ref.current = value;
      }
    }
    __name(setRef, "setRef");
    function composeRefs(...refs) {
      return (node) => refs.forEach((ref) => setRef(ref, node));
    }
    __name(composeRefs, "composeRefs");
    function useComposedRefs(...refs) {
      return React3.useCallback(composeRefs(...refs), refs);
    }
    __name(useComposedRefs, "useComposedRefs");
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_compose_refs(), module2.exports);
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var create_context_exports = {};
    __export2(create_context_exports, {
      createContext: () => createContext,
      createContextScope: () => createContextScope
    });
    module2.exports = __toCommonJS2(create_context_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var React3 = __toESM2(require("react"));
    function createContext(rootComponentName, defaultContext) {
      const Context = React3.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props;
        const value = React3.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
          value,
          children
        });
      }
      __name(Provider, "Provider");
      function useContext(consumerName) {
        const context = React3.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      __name(useContext, "useContext");
      Provider.displayName = rootComponentName + "Provider";
      return [Provider, useContext];
    }
    __name(createContext, "createContext");
    function createContextScope(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function createContext2(rootComponentName, defaultContext) {
        const BaseContext = React3.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [...defaultContexts, defaultContext];
        function Provider(props) {
          const { scope, children, ...context } = props;
          const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
          const value = React3.useMemo(() => context, Object.values(context));
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
            value,
            children
          });
        }
        __name(Provider, "Provider");
        function useContext(consumerName, scope) {
          const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
          const context = React3.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        __name(useContext, "useContext");
        Provider.displayName = rootComponentName + "Provider";
        return [Provider, useContext];
      }
      __name(createContext2, "createContext2");
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeContexts = defaultContexts.map((defaultContext) => {
          return React3.createContext(defaultContext);
        });
        return /* @__PURE__ */ __name(function useScope(scope) {
          const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
          return React3.useMemo(
            () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
            [scope, contexts]
          );
        }, "useScope");
      }, "createScope");
      createScope.scopeName = scopeName;
      return [createContext2, composeContextScopes(createScope, ...createContextScopeDeps)];
    }
    __name(createContextScope, "createContextScope");
    function composeContextScopes(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeHooks = scopes.map((createScope2) => ({
          useScope: createScope2(),
          scopeName: createScope2.scopeName
        }));
        return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
          const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
            const scopeProps = useScope(overrideScopes);
            const currentScope = scopeProps[`__scope${scopeName}`];
            return { ...nextScopes2, ...currentScope };
          }, {});
          return React3.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
        }, "useComposedScopes");
      }, "createScope");
      createScope.scopeName = baseScope.scopeName;
      return createScope;
    }
    __name(composeContextScopes, "composeContextScopes");
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_create_context(), module2.exports);
  }
});

// ../../node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "../../node_modules/aria-hidden/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    exports.hideOthers = function(originalTarget, parentNode, markerName) {
      if (parentNode === void 0) {
        parentNode = getDefaultParent(originalTarget);
      }
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || targets.indexOf(parent) >= 0) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute("aria-hidden");
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute("aria-hidden", "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute("aria-hidden");
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    };
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AriaHidden_exports = {};
    __export2(AriaHidden_exports, {
      hideOthers: () => import_aria_hidden.hideOthers
    });
    module2.exports = __toCommonJS2(AriaHidden_exports);
    var import_aria_hidden = require_es5();
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AriaHidden(), module2.exports);
  }
});

// ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e;
    var r;
    var t = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      "default" !== t2 && "__esModule" !== t2 && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    exports.useCallbackRef = function(e2) {
      const r2 = t.useRef(e2);
      return t.useEffect(() => {
        r2.current = e2;
      }), t.useMemo(() => (...e3) => {
        var t2;
        return null === (t2 = r2.current) || void 0 === t2 ? void 0 : t2.call(r2, ...e3);
      }, []);
    };
  }
});

// ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e;
    var t;
    var n = require_dist().useCallbackRef;
    var r = (e = {}, t = require("react"), Object.keys(t).forEach(function(n2) {
      "default" !== n2 && "__esModule" !== n2 && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return t[n2];
      } });
    }), e);
    exports.useEscapeKeydown = function(e2) {
      const t2 = n(e2);
      r.useEffect(() => {
        const e3 = /* @__PURE__ */ __name((e4) => {
          "Escape" === e4.key && t2(e4);
        }, "e");
        return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
      }, [t2]);
    };
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGet_exports = {};
    __export2(useGet_exports, {
      useGet: () => useGet2
    });
    module2.exports = __toCommonJS2(useGet_exports);
    var import_react = require("react");
    var isWeb3 = process.env.TAMAGUI_TARGET === "web";
    var isClient2 = typeof window !== "undefined";
    var useIsomorphicLayoutEffect2 = !isWeb3 || isClient2 ? import_react.useLayoutEffect : import_react.useEffect;
    function useGet2(currentValue, initialValue, forwardToFunction) {
      const curRef = (0, import_react.useRef)(initialValue ?? currentValue);
      useIsomorphicLayoutEffect2(() => {
        curRef.current = currentValue;
      });
      return (0, import_react.useCallback)(
        forwardToFunction ? (...args) => {
          var _a;
          return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
        } : () => curRef.current,
        []
      );
    }
    __name(useGet2, "useGet");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useEvent_exports = {};
    __export2(useEvent_exports, {
      useEvent: () => useEvent2
    });
    module2.exports = __toCommonJS2(useEvent_exports);
    var import_useGet = require_useGet();
    function useEvent2(callback) {
      return (0, import_useGet.useGet)(callback, defaultValue, true);
    }
    __name(useEvent2, "useEvent");
    var defaultValue = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "defaultValue");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useEvent(), module2.exports);
    __reExport2(src_exports, require_useGet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js
var require_Dismissable = __commonJS({
  "../../node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dismissable_exports = {};
    __export2(Dismissable_exports, {
      Dismissable: () => Dismissable,
      DismissableBranch: () => DismissableBranch
    });
    module2.exports = __toCommonJS2(Dismissable_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_use_escape_keydown = require_dist2();
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_use_event = require_cjs5();
    var React3 = __toESM2(require("react"));
    var ReactDOM = __toESM2(require("react-dom"));
    function dispatchDiscreteCustomEvent(target, event) {
      if (target)
        ReactDOM.flushSync(() => target.dispatchEvent(event));
    }
    __name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
    var DISMISSABLE_LAYER_NAME = "Dismissable";
    var CONTEXT_UPDATE = "dismissable.update";
    var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
    var FOCUS_OUTSIDE = "dismissable.focusOutside";
    var originalBodyPointerEvents;
    var DismissableContext = React3.createContext({
      layers: /* @__PURE__ */ new Set(),
      layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
      branches: /* @__PURE__ */ new Set()
    });
    var Dismissable = React3.forwardRef((props, forwardedRef) => {
      const {
        disableOutsidePointerEvents = false,
        forceUnmount,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss,
        ...layerProps
      } = props;
      const context = React3.useContext(DismissableContext);
      const [node, setNode] = React3.useState(null);
      const [, force] = React3.useState({});
      const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node2) => setNode(node2));
      const layers = Array.from(context.layers);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      const index = node ? layers.indexOf(node) : -1;
      const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
      const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
      const pointerDownOutside = usePointerDownOutside((event) => {
        const target = event.target;
        const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch)
          return;
        onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
        onInteractOutside == null ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented)
          onDismiss == null ? void 0 : onDismiss();
      });
      const focusOutside = useFocusOutside((event) => {
        const target = event.target;
        const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
        if (isFocusInBranch)
          return;
        onFocusOutside == null ? void 0 : onFocusOutside(event);
        onInteractOutside == null ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented)
          onDismiss == null ? void 0 : onDismiss();
      });
      (0, import_react_use_escape_keydown.useEscapeKeydown)((event) => {
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer)
          return;
        onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
          event.preventDefault();
          onDismiss();
        }
      });
      React3.useEffect(() => {
        if (!node)
          return;
        if (disableOutsidePointerEvents) {
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            originalBodyPointerEvents = document.body.style.pointerEvents;
            document.body.style.pointerEvents = "none";
          }
          context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return () => {
          if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
            document.body.style.pointerEvents = originalBodyPointerEvents;
          }
        };
      }, [node, disableOutsidePointerEvents, context]);
      React3.useEffect(() => {
        if (forceUnmount)
          return;
        return () => {
          if (!node)
            return;
          context.layers.delete(node);
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          dispatchUpdate();
        };
      }, [node, context, forceUnmount]);
      React3.useEffect(() => {
        const handleUpdate = /* @__PURE__ */ __name(() => {
          force({});
        }, "handleUpdate");
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        ...layerProps,
        ref: composedRefs,
        style: {
          display: "contents",
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: (0, import_core4.composeEventHandlers)(
          props.onFocusCapture,
          focusOutside.onFocusCapture
        ),
        onBlurCapture: (0, import_core4.composeEventHandlers)(
          props.onBlurCapture,
          focusOutside.onBlurCapture
        ),
        onPointerDownCapture: (0, import_core4.composeEventHandlers)(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      });
    });
    Dismissable.displayName = DISMISSABLE_LAYER_NAME;
    var BRANCH_NAME = "DismissableBranch";
    var DismissableBranch = React3.forwardRef(
      (props, forwardedRef) => {
        const context = React3.useContext(DismissableContext);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
        React3.useEffect(() => {
          const node = ref.current;
          if (node) {
            context.branches.add(node);
            return () => {
              context.branches.delete(node);
            };
          }
        }, [context.branches]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          style: { display: "contents" },
          ...props,
          ref: composedRefs
        });
      }
    );
    DismissableBranch.displayName = BRANCH_NAME;
    function usePointerDownOutside(onPointerDownOutside) {
      const handlePointerDownOutside = (0, import_use_event.useEvent)(onPointerDownOutside);
      const isPointerInsideReactTreeRef = React3.useRef(false);
      const handleClickRef = React3.useRef(() => {
      });
      React3.useEffect(() => {
        const handlePointerDown = /* @__PURE__ */ __name((event) => {
          if (event.target && !isPointerInsideReactTreeRef.current) {
            let handleAndDispatchPointerDownOutsideEvent2 = /* @__PURE__ */ __name(function() {
              handleAndDispatchCustomEvent(
                POINTER_DOWN_OUTSIDE,
                handlePointerDownOutside,
                eventDetail,
                { discrete: true }
              );
            }, "handleAndDispatchPointerDownOutsideEvent2");
            var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
            const eventDetail = { originalEvent: event };
            if (event.pointerType === "touch") {
              document.removeEventListener("click", handleClickRef.current);
              handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
              document.addEventListener("click", handleClickRef.current, { once: true });
            } else {
              handleAndDispatchPointerDownOutsideEvent2();
            }
          }
          isPointerInsideReactTreeRef.current = false;
        }, "handlePointerDown");
        const timerId = setTimeout(() => {
          document.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return () => {
          window.clearTimeout(timerId);
          document.removeEventListener("pointerdown", handlePointerDown);
          document.removeEventListener("click", handleClickRef.current);
        };
      }, [handlePointerDownOutside]);
      return {
        onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
      };
    }
    __name(usePointerDownOutside, "usePointerDownOutside");
    function useFocusOutside(onFocusOutside) {
      const handleFocusOutside = (0, import_use_event.useEvent)(onFocusOutside);
      const isFocusInsideReactTreeRef = React3.useRef(false);
      React3.useEffect(() => {
        const handleFocus = /* @__PURE__ */ __name((event) => {
          if (event.target && !isFocusInsideReactTreeRef.current) {
            const eventDetail = { originalEvent: event };
            handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
              discrete: false
            });
          }
        }, "handleFocus");
        document.addEventListener("focusin", handleFocus);
        return () => document.removeEventListener("focusin", handleFocus);
      }, [handleFocusOutside]);
      return {
        onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
        onBlurCapture: () => isFocusInsideReactTreeRef.current = false
      };
    }
    __name(useFocusOutside, "useFocusOutside");
    function dispatchUpdate() {
      const event = new CustomEvent(CONTEXT_UPDATE);
      document.dispatchEvent(event);
    }
    __name(dispatchUpdate, "dispatchUpdate");
    function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
      const target = detail.originalEvent.target;
      const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
      if (handler)
        target.addEventListener(name, handler, { once: true });
      if (discrete) {
        dispatchDiscreteCustomEvent(target, event);
      } else {
        target.dispatchEvent(event);
      }
    }
    __name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
  }
});

// ../../node_modules/@tamagui/dismissable/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "../../node_modules/@tamagui/dismissable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Dismissable(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var FocusScope_exports = {};
    __export2(FocusScope_exports, {
      FocusScope: () => FocusScope
    });
    module2.exports = __toCommonJS2(FocusScope_exports);
    var import_compose_refs = require_cjs2();
    var import_use_event = require_cjs5();
    var React3 = __toESM2(require("react"));
    var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    var EVENT_OPTIONS = { bubbles: false, cancelable: true };
    var FOCUS_SCOPE_NAME = "FocusScope";
    var FocusScope = React3.forwardRef((props, forwardedRef) => {
      const {
        loop = false,
        trapped = false,
        onMountAutoFocus: onMountAutoFocusProp,
        onUnmountAutoFocus: onUnmountAutoFocusProp,
        children,
        forceUnmount,
        ...scopeProps
      } = props;
      const [container, setContainer] = React3.useState(null);
      const onMountAutoFocus = (0, import_use_event.useEvent)(onMountAutoFocusProp);
      const onUnmountAutoFocus = (0, import_use_event.useEvent)(onUnmountAutoFocusProp);
      const lastFocusedElementRef = React3.useRef(null);
      const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => setContainer(node));
      const focusScope = React3.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      }).current;
      React3.useEffect(() => {
        if (!trapped)
          return;
        function handleFocusIn(event) {
          if (focusScope.paused || !container)
            return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }
        __name(handleFocusIn, "handleFocusIn");
        function handleFocusOut(event) {
          if (focusScope.paused || !container)
            return;
          if (!container.contains(event.relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }
        __name(handleFocusOut, "handleFocusOut");
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);
        return () => {
          document.removeEventListener("focusin", handleFocusIn);
          document.removeEventListener("focusout", handleFocusOut);
        };
      }, [trapped, forceUnmount, container, focusScope.paused]);
      React3.useEffect(() => {
        if (!container)
          return;
        if (forceUnmount)
          return;
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        };
      }, [container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
      const handleKeyDown = React3.useCallback(
        (event) => {
          if (!loop && !trapped)
            return;
          if (focusScope.paused)
            return;
          const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
          const focusedElement = document.activeElement;
          if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
              if (focusedElement === container2)
                event.preventDefault();
            } else {
              if (!event.shiftKey && focusedElement === last) {
                event.preventDefault();
                if (loop)
                  focus(first, { select: true });
              } else if (event.shiftKey && focusedElement === first) {
                event.preventDefault();
                if (loop)
                  focus(last, { select: true });
              }
            }
          }
        },
        [loop, trapped, focusScope.paused]
      );
      const child = React3.Children.only(children);
      return React3.cloneElement(child, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
      });
    });
    FocusScope.displayName = FOCUS_SCOPE_NAME;
    function focusFirst(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates) {
        focus(candidate, { select });
        if (document.activeElement !== previouslyFocusedElement)
          return;
      }
    }
    __name(focusFirst, "focusFirst");
    function getTabbableEdges(container) {
      const candidates = getTabbableCandidates(container);
      const first = findVisible(candidates, container);
      const last = findVisible(candidates.reverse(), container);
      return [first, last];
    }
    __name(getTabbableEdges, "getTabbableEdges");
    function getTabbableCandidates(container) {
      const nodes = [];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    }
    __name(getTabbableCandidates, "getTabbableCandidates");
    function findVisible(elements, container) {
      for (const element of elements) {
        if (!isHidden(element, { upTo: container }))
          return element;
      }
    }
    __name(findVisible, "findVisible");
    function isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      while (node) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    __name(isHidden, "isHidden");
    function isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    __name(isSelectableInput, "isSelectableInput");
    function focus(element, { select = false } = {}) {
      if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({ preventScroll: true });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
          element.select();
      }
    }
    __name(focus, "focus");
    var focusScopesStack = createFocusScopesStack();
    function createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          if (focusScope !== activeFocusScope) {
            activeFocusScope == null ? void 0 : activeFocusScope.pause();
          }
          stack = arrayRemove(stack, focusScope);
          stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _a;
          stack = arrayRemove(stack, focusScope);
          (_a = stack[0]) == null ? void 0 : _a.resume();
        }
      };
    }
    __name(createFocusScopesStack, "createFocusScopesStack");
    function arrayRemove(array, item) {
      const updatedArray = [...array];
      const index = updatedArray.indexOf(item);
      if (index !== -1) {
        updatedArray.splice(index, 1);
      }
      return updatedArray;
    }
    __name(arrayRemove, "arrayRemove");
    function removeLinks(items) {
      return items.filter((item) => item.tagName !== "A");
    }
    __name(removeLinks, "removeLinks");
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_FocusScope(), module2.exports);
  }
});

// ../../node_modules/@tamagui/polyfill-dev/index.js
var require_polyfill_dev = __commonJS({
  "../../node_modules/@tamagui/polyfill-dev/index.js"() {
    if (typeof globalThis["__DEV__"] === "undefined") {
      globalThis["__DEV__"] = process.env.NODE_ENV === "development";
    }
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Stacks_exports = {};
    __export2(Stacks_exports, {
      XStack: () => XStack,
      YStack: () => YStack,
      ZStack: () => ZStack,
      getElevation: () => getElevation,
      getSizedElevation: () => getSizedElevation
    });
    module2.exports = __toCommonJS2(Stacks_exports);
    var import_core4 = require("@tamagui/core-node");
    var getElevation = /* @__PURE__ */ __name((size2, extras) => {
      if (!size2)
        return;
      const { tokens: tokens2 } = extras;
      const token = tokens2.size[size2];
      const sizeNum = (0, import_core4.isVariable)(token) ? +token.val : size2;
      return getSizedElevation(sizeNum, extras);
    }, "getElevation");
    var fullscreenStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var variants = {
      fullscreen: {
        true: fullscreenStyle
      },
      elevation: {
        "...size": getElevation
      }
    };
    var YStack = (0, import_core4.styled)(import_core4.Stack, {
      flexDirection: "column",
      name: "YStack",
      variants
    });
    var XStack = (0, import_core4.styled)(import_core4.Stack, {
      flexDirection: "row",
      name: "XStack",
      variants
    });
    var ZStack = (0, import_core4.styled)(
      YStack,
      {
        name: "ZStack",
        position: "relative"
      },
      {
        neverFlatten: true,
        isZStack: true
      }
    );
    var getSizedElevation = /* @__PURE__ */ __name((val, { theme, tokens: tokens2 }) => {
      let num = 0;
      if (val === true) {
        const val2 = (0, import_core4.getVariableValue)(tokens2.size["true"]);
        if (typeof val2 === "number") {
          num = val2;
        } else {
          num = 10;
        }
      } else {
        num = +val;
      }
      if (process.env.NODE_ENV === "development") {
        if (isNaN(num))
          console.warn("NaN shadow", num, val);
      }
      const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
      const shadow = {
        shadowColor: theme.shadowColor,
        shadowRadius,
        shadowOffset: { height, width: 0 }
      };
      return shadow;
    }, "getSizedElevation");
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var variants_exports = {};
    __export2(variants_exports, {
      bordered: () => bordered,
      circular: () => circular,
      elevate: () => elevate,
      focusTheme: () => focusTheme,
      hoverTheme: () => hoverTheme,
      padded: () => padded,
      pressTheme: () => pressTheme,
      radiused: () => radiused
    });
    module2.exports = __toCommonJS2(variants_exports);
    var import_Stacks = require_Stacks();
    var elevate = {
      true: (_, extras) => {
        return (0, import_Stacks.getElevation)(extras.props["size"], extras);
      }
    };
    var bordered = /* @__PURE__ */ __name((val, { props }) => {
      return {
        borderWidth: typeof val === "number" ? val : 1,
        borderColor: "$borderColor",
        ...props.hoverTheme && {
          hoverStyle: {
            borderColor: "$borderColorHover"
          }
        },
        ...props.pressTheme && {
          pressStyle: {
            borderColor: "$borderColorPress"
          }
        },
        ...props.focusTheme && {
          focusStyle: {
            borderColor: "$borderColorFocus"
          }
        }
      };
    }, "bordered");
    var padded = {
      true: (_, extras) => {
        const { tokens: tokens2, props } = extras;
        return {
          padding: tokens2.space[props.size] || tokens2.space["$4"]
        };
      }
    };
    var radiused = {
      true: (_, extras) => {
        const { tokens: tokens2, props } = extras;
        return {
          borderRadius: tokens2.radius[props.size] || tokens2.radius["$4"]
        };
      }
    };
    var circular = {
      true: (_, { props, tokens: tokens2 }) => {
        const size2 = tokens2.size[props.size];
        return {
          width: size2,
          height: size2,
          maxWidth: size2,
          maxHeight: size2,
          minWidth: size2,
          minHeight: size2,
          borderRadius: 1e5,
          paddingVertical: 0,
          paddingHorizontal: 0
        };
      }
    };
    var hoverTheme = {
      true: {
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        }
      },
      false: {}
    };
    var pressTheme = {
      true: {
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      },
      false: {}
    };
    var focusTheme = {
      true: {
        focusStyle: {
          backgroundColor: "$backgroundFocus",
          borderColor: "$borderColorFocus"
        }
      },
      false: {}
    };
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableStack_exports = {};
    __export2(SizableStack_exports, {
      SizableStack: () => SizableStack
    });
    module2.exports = __toCommonJS2(SizableStack_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_Stacks = require_Stacks();
    var import_variants = require_variants();
    var SizableStack = (0, import_core4.styled)(import_Stacks.YStack, {
      name: "SizableStack",
      backgroundColor: "$background",
      flexDirection: "row",
      flexShrink: 1,
      variants: {
        fontFamily: () => ({}),
        hoverTheme: import_variants.hoverTheme,
        pressTheme: import_variants.pressTheme,
        focusTheme: import_variants.focusTheme,
        circular: import_variants.circular,
        elevate: import_variants.elevate,
        bordered: import_variants.bordered,
        size: {
          "...size": import_core4.getButtonSize
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ThemeableStack_exports = {};
    __export2(ThemeableStack_exports, {
      ThemeableStack: () => ThemeableStack
    });
    module2.exports = __toCommonJS2(ThemeableStack_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_Stacks = require_Stacks();
    var import_variants = require_variants();
    var chromelessStyle = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent"
    };
    var ThemeableStack = (0, import_core4.styled)(import_Stacks.YStack, {
      name: "SizableStack",
      variants: {
        fontFamily: () => ({}),
        backgrounded: {
          true: {
            backgroundColor: "$background"
          }
        },
        radiused: import_variants.radiused,
        hoverTheme: import_variants.hoverTheme,
        pressTheme: import_variants.pressTheme,
        focusTheme: import_variants.focusTheme,
        circular: import_variants.circular,
        padded: import_variants.padded,
        elevate: import_variants.elevate,
        bordered: import_variants.bordered,
        transparent: {
          true: {
            backgroundColor: "transparent"
          }
        },
        chromeless: {
          true: chromelessStyle,
          all: {
            ...chromelessStyle,
            hoverStyle: chromelessStyle,
            pressStyle: chromelessStyle,
            focusStyle: chromelessStyle
          }
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Stacks(), module2.exports);
    __reExport2(src_exports, require_SizableStack(), module2.exports);
    __reExport2(src_exports, require_ThemeableStack(), module2.exports);
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/Portal.js
var require_Portal = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/Portal.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Portal_exports = {};
    __export2(Portal_exports, {
      Portal: () => Portal
    });
    module2.exports = __toCommonJS2(Portal_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var Portal = /* @__PURE__ */ __name(({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
      const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
        pointerEvents: "box-none",
        contain: "strict",
        fullscreen: true,
        position: import_core4.isWeb ? "fixed" : "absolute",
        maxWidth: import_core4.isWeb ? "100vw" : "100%",
        maxHeight: import_core4.isWeb ? "100vh" : "100%",
        ...props
      });
      const [hostElement, setHostElement] = React3.useState(null);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        setHostElement(host);
      }, [host]);
      if (hostElement) {
        return (0, import_react_dom.createPortal)(contents, hostElement);
      }
      return null;
    }, "Portal");
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js
var require_GorhomPortal = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var GorhomPortal_exports = {};
    __export2(GorhomPortal_exports, {
      ACTIONS: () => ACTIONS,
      INITIAL_STATE: () => INITIAL_STATE,
      PortalHost: () => PortalHost,
      PortalItem: () => PortalItem,
      PortalProvider: () => PortalProvider,
      usePortal: () => usePortal
    });
    module2.exports = __toCommonJS2(GorhomPortal_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_react2 = require("react");
    var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
      ACTIONS2[ACTIONS2["REGISTER_HOST"] = 0] = "REGISTER_HOST";
      ACTIONS2[ACTIONS2["DEREGISTER_HOST"] = 1] = "DEREGISTER_HOST";
      ACTIONS2[ACTIONS2["ADD_UPDATE_PORTAL"] = 2] = "ADD_UPDATE_PORTAL";
      ACTIONS2[ACTIONS2["REMOVE_PORTAL"] = 3] = "REMOVE_PORTAL";
      return ACTIONS2;
    })(ACTIONS || {});
    var INITIAL_STATE = {};
    var registerHost = /* @__PURE__ */ __name((state, hostName) => {
      if (!(hostName in state)) {
        state[hostName] = [];
      }
      return state;
    }, "registerHost");
    var deregisterHost = /* @__PURE__ */ __name((state, hostName) => {
      delete state[hostName];
      return state;
    }, "deregisterHost");
    var addUpdatePortal = /* @__PURE__ */ __name((state, hostName, portalName, node) => {
      if (!(hostName in state)) {
        state = registerHost(state, hostName);
      }
      const index = state[hostName].findIndex((item) => item.name === portalName);
      if (index !== -1) {
        state[hostName][index].node = node;
      } else {
        state[hostName].push({
          name: portalName,
          node
        });
      }
      return state;
    }, "addUpdatePortal");
    var removePortal = /* @__PURE__ */ __name((state, hostName, portalName) => {
      if (!(hostName in state)) {
        console.log(`Failed to remove portal '${portalName}', '${hostName}' was not registered!`);
        return state;
      }
      const index = state[hostName].findIndex((item) => item.name === portalName);
      if (index !== -1)
        state[hostName].splice(index, 1);
      return state;
    }, "removePortal");
    var reducer = /* @__PURE__ */ __name((state, action) => {
      const { type } = action;
      switch (type) {
        case 0:
          return registerHost({ ...state }, action.hostName);
        case 1:
          return deregisterHost({ ...state }, action.hostName);
        case 2:
          return addUpdatePortal(
            { ...state },
            action.hostName,
            action.portalName,
            action.node
          );
        case 3:
          return removePortal({ ...state }, action.hostName, action.portalName);
        default:
          return state;
      }
    }, "reducer");
    var PortalStateContext = (0, import_react2.createContext)(null);
    var PortalDispatchContext = (0, import_react2.createContext)(null);
    var usePortalState = /* @__PURE__ */ __name((hostName) => {
      const state = (0, import_react2.useContext)(PortalStateContext);
      if (state === null) {
        throw new Error(
          "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      return state[hostName] || [];
    }, "usePortalState");
    var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
      const dispatch = (0, import_react2.useContext)(PortalDispatchContext);
      if (dispatch === null) {
        throw new Error(
          "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      const registerHost2 = (0, import_react2.useCallback)(() => {
        dispatch({
          type: 0,
          hostName
        });
      }, []);
      const deregisterHost2 = (0, import_react2.useCallback)(() => {
        dispatch({
          type: 1,
          hostName
        });
      }, []);
      const addUpdatePortal2 = (0, import_react2.useCallback)((name, node) => {
        dispatch({
          type: 2,
          hostName,
          portalName: name,
          node
        });
      }, []);
      const removePortal2 = (0, import_react2.useCallback)((name) => {
        dispatch({
          type: 3,
          hostName,
          portalName: name
        });
      }, []);
      return {
        registerHost: registerHost2,
        deregisterHost: deregisterHost2,
        addPortal: addUpdatePortal2,
        updatePortal: addUpdatePortal2,
        removePortal: removePortal2
      };
    }, "usePortal");
    var PortalProviderComponent = /* @__PURE__ */ __name(({
      rootHostName = "root",
      shouldAddRootHost = true,
      children
    }) => {
      const [state, dispatch] = (0, import_react2.useReducer)(reducer, INITIAL_STATE);
      const transitionDispatch = (0, import_react.useMemo)(() => {
        const next = /* @__PURE__ */ __name((value) => {
          (0, import_core4.startTransition)(() => {
            dispatch(value);
          });
        }, "next");
        return next;
      }, [dispatch]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDispatchContext.Provider, {
        value: transitionDispatch,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalStateContext.Provider, {
          value: state,
          children: [
            children,
            shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalHost, {
              name: rootHostName
            })
          ]
        })
      });
    }, "PortalProviderComponent");
    var PortalProvider = (0, import_react2.memo)(PortalProviderComponent);
    PortalProvider.displayName = "PortalProvider";
    var PortalHostComponent = /* @__PURE__ */ __name(({ name }) => {
      const isServer2 = (0, import_core4.useIsSSR)();
      const state = usePortalState(name);
      const { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(name);
      (0, import_react2.useEffect)(() => {
        if (isServer2)
          return;
        registerHost2();
        return () => {
          deregisterHost2();
        };
      }, [isServer2]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: state.map((item) => item.node)
      });
    }, "PortalHostComponent");
    var PortalHost = (0, import_react2.memo)(PortalHostComponent);
    PortalHost.displayName = "PortalHost";
    var PortalComponent = /* @__PURE__ */ __name(({
      name: _providedName,
      hostName,
      handleOnMount: _providedHandleOnMount,
      handleOnUnmount: _providedHandleOnUnmount,
      handleOnUpdate: _providedHandleOnUpdate,
      children
    }) => {
      const { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName);
      let id = 0;
      const nanoid = /* @__PURE__ */ __name(() => {
        id = (id + 1) % Number.MAX_SAFE_INTEGER;
        return `${id}`;
      }, "nanoid");
      const name = (0, import_react.useMemo)(() => _providedName || nanoid(), [_providedName]);
      const handleOnMountRef = (0, import_react.useRef)();
      const handleOnUnmountRef = (0, import_react.useRef)();
      const handleOnUpdateRef = (0, import_react.useRef)();
      const handleOnMount = (0, import_react2.useCallback)(() => {
        if (_providedHandleOnMount) {
          _providedHandleOnMount(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      }, [_providedHandleOnMount, addUpdatePortal2]);
      handleOnMountRef.current = handleOnMount;
      const handleOnUnmount = (0, import_react2.useCallback)(() => {
        if (_providedHandleOnUnmount) {
          _providedHandleOnUnmount(() => removePortal2(name));
        } else {
          removePortal2(name);
        }
      }, [_providedHandleOnUnmount, removePortal2]);
      handleOnUnmountRef.current = handleOnUnmount;
      const handleOnUpdate = (0, import_react2.useCallback)(() => {
        if (_providedHandleOnUpdate) {
          _providedHandleOnUpdate(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      }, [_providedHandleOnUpdate, addUpdatePortal2, children]);
      handleOnUpdateRef.current = handleOnUpdate;
      (0, import_react2.useEffect)(() => {
        var _a;
        (_a = handleOnMountRef.current) == null ? void 0 : _a.call(handleOnMountRef);
        return () => {
          var _a2;
          (_a2 = handleOnUnmountRef.current) == null ? void 0 : _a2.call(handleOnUnmountRef);
          handleOnMountRef.current = void 0;
          handleOnUnmountRef.current = void 0;
          handleOnUpdateRef.current = void 0;
        };
      }, []);
      (0, import_react2.useEffect)(() => {
        var _a;
        (_a = handleOnUpdateRef.current) == null ? void 0 : _a.call(handleOnUpdateRef);
      }, [children]);
      return null;
    }, "PortalComponent");
    var PortalItem = (0, import_react2.memo)(PortalComponent);
    PortalItem.displayName = "Portal";
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Portal(), module2.exports);
    __reExport2(src_exports, require_GorhomPortal(), module2.exports);
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module2) {
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __classPrivateFieldIn;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
      __name(createExporter, "createExporter");
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = /* @__PURE__ */ __name(function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }, "__extends");
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = /* @__PURE__ */ __name(function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      }, "__rest");
      __decorate = /* @__PURE__ */ __name(function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }, "__decorate");
      __param = /* @__PURE__ */ __name(function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }, "__param");
      __metadata = /* @__PURE__ */ __name(function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      }, "__metadata");
      __awaiter = /* @__PURE__ */ __name(function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }, "__awaiter");
      __generator = /* @__PURE__ */ __name(function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      }, "__generator");
      __exportStar = /* @__PURE__ */ __name(function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      }, "__exportStar");
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = /* @__PURE__ */ __name(function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, "__values");
      __read = /* @__PURE__ */ __name(function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      }, "__read");
      __spread = /* @__PURE__ */ __name(function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }, "__spread");
      __spreadArrays = /* @__PURE__ */ __name(function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }, "__spreadArrays");
      __spreadArray = /* @__PURE__ */ __name(function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      }, "__spreadArray");
      __await = /* @__PURE__ */ __name(function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }, "__await");
      __asyncGenerator = /* @__PURE__ */ __name(function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        __name(verb, "verb");
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        __name(resume, "resume");
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        __name(step, "step");
        function fulfill(value) {
          resume("next", value);
        }
        __name(fulfill, "fulfill");
        function reject(value) {
          resume("throw", value);
        }
        __name(reject, "reject");
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
        __name(settle, "settle");
      }, "__asyncGenerator");
      __asyncDelegator = /* @__PURE__ */ __name(function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
        __name(verb, "verb");
      }, "__asyncDelegator");
      __asyncValues = /* @__PURE__ */ __name(function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        __name(verb, "verb");
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
        __name(settle, "settle");
      }, "__asyncValues");
      __makeTemplateObject = /* @__PURE__ */ __name(function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }, "__makeTemplateObject");
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = /* @__PURE__ */ __name(function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      }, "__importStar");
      __importDefault = /* @__PURE__ */ __name(function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      }, "__importDefault");
      __classPrivateFieldGet = /* @__PURE__ */ __name(function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }, "__classPrivateFieldGet");
      __classPrivateFieldSet = /* @__PURE__ */ __name(function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }, "__classPrivateFieldSet");
      __classPrivateFieldIn = /* @__PURE__ */ __name(function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      }, "__classPrivateFieldIn");
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
    exports.zeroRightClassName = "right-scroll-bar-position";
    exports.fullWidthClassName = "width-before-scroll-bar";
    exports.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// ../../node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/assignRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports.assignRef = assignRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef(initialValue, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          value: initialValue,
          callback,
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef, "useCallbackRef");
    exports.useCallbackRef = useCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/createRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports.createCallbackRef = createCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports.mergeRefs = mergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs(refs, defaultValue) {
      return (0, useRef_1.useCallbackRef)(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs, "useMergeRefs");
    exports.useMergeRefs = useMergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports.useTransformRef = useTransformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/transformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports.transformRef = transformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports.useRefToCallback = useRefToCallback;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// ../../node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "../../node_modules/detect-node-es/es5/node.js"(exports, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// ../../node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    var detect_node_es_1 = require_node();
    exports.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// ../../node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e) {
            return setError(function() {
              return e;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// ../../node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sidecar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React3.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports.sidecar = sidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConfig = exports.config = void 0;
    exports.config = {
      onError: function(e) {
        return console.error(e);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports.config, conf);
    }, "setConfig");
    exports.setConfig = setConfig;
  }
});

// ../../node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSidecarMedium = exports.createMedium = void 0;
    var tslib_1 = require_tslib();
    function ItoI(a) {
      return a;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x) {
              return x !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
          }
          buffer = {
            push: function(x) {
              return cb(x);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x) {
              pendingQueue.push(x);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports.createSidecarMedium = createSidecarMedium;
  }
});

// ../../node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/renderProp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderCar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React3.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children = React3.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React3.useRef(defaults(props));
        var ref = React3.useRef(function(state) {
          return defaultState.current = state;
        });
        return React3.createElement(
          React3.Fragment,
          null,
          React3.createElement(State, { stateRef: ref, props }),
          React3.createElement(Children, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports.renderCar = renderCar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/exports.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React3.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports.exportSidecar = exportSidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/UI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll = React3.forwardRef(function(props, parentRef) {
      var ref = React3.useRef(null);
      var _a = React3.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React3.createElement(
        React3.Fragment,
        null,
        enabled && React3.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
        forwardProps ? React3.cloneElement(React3.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports.RemoveScroll = RemoveScroll;
    RemoveScroll.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// ../../node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "../../node_modules/get-nonce/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentNonce;
    exports.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// ../../node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports.stylesheetSingleton = stylesheetSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React3.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports.styleHookSingleton = styleHookSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle = (0, hook_1.styleHookSingleton)();
      var Sheet = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet;
    }, "styleSingleton");
    exports.styleSingleton = styleSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.zeroGap = void 0;
    exports.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x) {
      return parseInt(x || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      if (process.env.NODE_ENV !== "production") {
        if (cs.overflowY === "hidden") {
          console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
        }
      }
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports.getGapWidth = getGapWidth;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollBar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React3.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React3.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports.RemoveScrollBar = RemoveScrollBar;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleScroll = exports.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== document.body);
      return false;
    }, "locationCouldBeScrolled");
    exports.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports.handleScroll = handleScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React3.useRef([]);
      var touchStartRef = React3.useRef([0, 0]);
      var activeAxis = React3.useRef();
      var id = React3.useState(idCounter++)[0];
      var Style = React3.useState(function() {
        return (0, react_style_singleton_1.styleSingleton)();
      })[0];
      var lastProps = React3.useRef(props);
      React3.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React3.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React3.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React3.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React3.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React3.useCallback(function(event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React3.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React3.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React3.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React3.createElement(
        React3.Fragment,
        null,
        inert ? React3.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React3.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/Combination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React3.forwardRef(function(props, ref) {
      return React3.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports.default = ReactRemoveScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = require_tslib();
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports.RemoveScroll = Combination_1.default;
  }
});

// ../../node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js
var require_RemoveScroll = __commonJS({
  "../../node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var RemoveScroll_exports = {};
    __export2(RemoveScroll_exports, {
      RemoveScroll: () => RemoveScroll
    });
    module2.exports = __toCommonJS2(RemoveScroll_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_remove_scroll = require_es57();
    var RemoveScroll = /* @__PURE__ */ __name((props) => {
      if (!props.children)
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_remove_scroll.RemoveScroll, {
        ...props
      });
    }, "RemoveScroll");
    RemoveScroll.classNames = import_react_remove_scroll.RemoveScroll.classNames;
  }
});

// ../../node_modules/@tamagui/remove-scroll/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "../../node_modules/@tamagui/remove-scroll/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_RemoveScroll(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useControllableState_exports = {};
    __export2(useControllableState_exports, {
      useControllableState: () => useControllableState
    });
    module2.exports = __toCommonJS2(useControllableState_exports);
    var import_use_event = require_cjs5();
    var import_react = require("react");
    function useControllableState({
      prop,
      defaultProp,
      onChange,
      strategy = "prop-wins",
      preventUpdate
    }) {
      const [state, setState] = (0, import_react.useState)(prop ?? defaultProp);
      const previous = (0, import_react.useRef)(state);
      const propWins = strategy === "prop-wins" && prop !== void 0;
      const value = propWins ? prop : state;
      const onChangeCb = (0, import_use_event.useEvent)(onChange || idFn);
      (0, import_react.useEffect)(() => {
        if (prop === void 0)
          return;
        previous.current = prop;
        setState(prop);
      }, [prop]);
      (0, import_react.useEffect)(() => {
        if (propWins)
          return;
        if (state !== previous.current) {
          previous.current = state;
          onChangeCb(state);
        }
      }, [onChangeCb, state, propWins]);
      const setter = (0, import_use_event.useEvent)((next) => {
        if (preventUpdate)
          return;
        if (propWins) {
          const nextValue = typeof next === "function" ? next(previous.current) : next;
          onChangeCb(nextValue);
        } else {
          setState(next);
        }
      });
      return [value, setter];
    }
    __name(useControllableState, "useControllableState");
    var idFn = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useControllableState(), module2.exports);
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SHEET_HANDLE_NAME.js
var require_SHEET_HANDLE_NAME = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SHEET_HANDLE_NAME.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SHEET_HANDLE_NAME_exports = {};
    __export2(SHEET_HANDLE_NAME_exports, {
      SHEET_HANDLE_NAME: () => SHEET_HANDLE_NAME,
      SHEET_NAME: () => SHEET_NAME,
      constants: () => constants
    });
    module2.exports = __toCommonJS2(SHEET_HANDLE_NAME_exports);
    var constants = {};
    var SHEET_NAME = "Sheet";
    var SHEET_HANDLE_NAME = "SheetHandle";
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SheetContext.js
var require_SheetContext = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SheetContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetContext_exports = {};
    __export2(SheetContext_exports, {
      SheetProvider: () => SheetProvider,
      createSheetContext: () => createSheetContext,
      createSheetScope: () => createSheetScope2,
      useSheetContext: () => useSheetContext
    });
    module2.exports = __toCommonJS2(SheetContext_exports);
    var import_create_context = require_cjs3();
    var import_SHEET_HANDLE_NAME = require_SHEET_HANDLE_NAME();
    var [createSheetContext, createSheetScope2] = (0, import_create_context.createContextScope)(import_SHEET_HANDLE_NAME.SHEET_NAME);
    var [SheetProvider, useSheetContext] = createSheetContext(
      import_SHEET_HANDLE_NAME.SHEET_NAME,
      {}
    );
  }
});

// ../../node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js
var require_ScrollView = __commonJS({
  "../../node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ScrollView_exports = {};
    __export2(ScrollView_exports, {
      ScrollView: () => ScrollView
    });
    module2.exports = __toCommonJS2(ScrollView_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_react_native3 = require("react-native-web-lite");
    var ScrollView = (0, import_core4.styled)(import_react_native3.ScrollView, {
      name: "ScrollView"
    });
  }
});

// ../../node_modules/@tamagui/scroll-view/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "../../node_modules/@tamagui/scroll-view/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ScrollView(), module2.exports);
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js
var require_SheetScrollView = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetScrollView_exports = {};
    __export2(SheetScrollView_exports, {
      SheetScrollView: () => SheetScrollView
    });
    module2.exports = __toCommonJS2(SheetScrollView_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_scroll_view = require_cjs12();
    var import_react = require("react");
    var import_SheetContext = require_SheetContext();
    var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
    var SheetScrollView = (0, import_react.forwardRef)(
      ({ __scopeSheet, ...props }, ref) => {
        const { scrollBridge } = (0, import_SheetContext.useSheetContext)(SHEET_SCROLL_VIEW_NAME, __scopeSheet);
        const [scrollEnabled, setScrollEnabled] = (0, import_react.useState)(true);
        const state = (0, import_react.useRef)({
          lastPageY: 0,
          dragAt: 0,
          dys: [],
          isScrolling: false
        });
        const release = /* @__PURE__ */ __name(() => {
          scrollBridge.scrollStartY = -1;
          state.current.isScrolling = false;
          setScrollEnabled(true);
          let vy = 0;
          if (state.current.dys.length) {
            const recentDys = state.current.dys.slice(-10);
            const dist = recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0;
            const avgDy = dist / recentDys.length;
            vy = avgDy * 0.04;
          }
          state.current.dys = [];
          scrollBridge.release({
            dragAt: state.current.dragAt,
            vy
          });
        }, "release");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_scroll_view.ScrollView, {
          ref,
          flex: 1,
          scrollEventThrottle: 8,
          scrollEnabled,
          onScroll: (e) => {
            const { y } = e.nativeEvent.contentOffset;
            scrollBridge.y = y;
            if (y > 0) {
              scrollBridge.scrollStartY = -1;
            }
          },
          onStartShouldSetResponder: () => {
            scrollBridge.scrollStartY = -1;
            return true;
          },
          onMoveShouldSetResponder: () => true,
          onResponderMove: (e) => {
            const { pageY } = e.nativeEvent;
            if (state.current.isScrolling) {
              return;
            }
            if (scrollBridge.scrollStartY === -1) {
              scrollBridge.scrollStartY = pageY;
              state.current.lastPageY = pageY;
            }
            const dragAt = pageY - scrollBridge.scrollStartY;
            const dy = pageY - state.current.lastPageY;
            state.current.lastPageY = pageY;
            const isDraggingUp = dy < 0;
            const isPaneAtTop = scrollBridge.paneY <= scrollBridge.paneMinY;
            if ((dy === 0 || isDraggingUp) && isPaneAtTop) {
              state.current.isScrolling = true;
              setScrollEnabled(true);
              return;
            }
            setScrollEnabled(false);
            scrollBridge.drag(dragAt);
            state.current.dragAt = dragAt;
            state.current.dys.push(dy);
            if (state.current.dys.length > 100) {
              state.current.dys = state.current.dys.slice(-10);
            }
          },
          onResponderRelease: release,
          ...props
        });
      }
    );
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/Sheet.js
var require_Sheet = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/Sheet.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Sheet_exports = {};
    __export2(Sheet_exports, {
      ControlledSheet: () => ControlledSheet,
      Sheet: () => Sheet,
      SheetController: () => SheetController,
      SheetFrame: () => SheetFrame,
      SheetFrameFrame: () => SheetFrameFrame,
      SheetHandle: () => SheetHandle,
      SheetHandleFrame: () => SheetHandleFrame,
      SheetOverlay: () => SheetOverlay,
      SheetOverlayFrame: () => SheetOverlayFrame,
      createSheetScope: () => import_SheetContext2.createSheetScope
    });
    module2.exports = __toCommonJS2(Sheet_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_portal = require_cjs9();
    var import_remove_scroll = require_cjs10();
    var import_stacks = require_cjs8();
    var import_use_controllable_state = require_cjs11();
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var import_SHEET_HANDLE_NAME = require_SHEET_HANDLE_NAME();
    var import_SheetContext = require_SheetContext();
    var import_SheetScrollView = require_SheetScrollView();
    var import_SheetContext2 = require_SheetContext();
    var SheetHandleFrame = (0, import_core4.styled)(import_stacks.XStack, {
      name: import_SHEET_HANDLE_NAME.SHEET_HANDLE_NAME,
      height: 10,
      borderRadius: 100,
      backgroundColor: "$background",
      zIndex: 10,
      marginHorizontal: "35%",
      marginBottom: "$2",
      opacity: 0.5,
      hoverStyle: {
        opacity: 0.7
      },
      variants: {
        open: {
          true: {
            pointerEvents: "auto"
          },
          false: {
            opacity: 0,
            pointerEvents: "none"
          }
        }
      }
    });
    var SheetHandle = SheetHandleFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(import_SHEET_HANDLE_NAME.SHEET_HANDLE_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHandleFrame, {
          onPress: () => {
            const max = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
            const nextPos = (context.position + 1) % max;
            context.setPosition(nextPos);
          },
          open: context.open,
          ...props
        });
      }
    );
    var SHEET_OVERLAY_NAME = "SheetOverlay";
    var SheetOverlayFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: SHEET_OVERLAY_NAME,
      backgroundColor: "$color",
      fullscreen: true,
      opacity: 0.2,
      zIndex: 0,
      variants: {
        closed: {
          true: {
            opacity: 0,
            pointerEvents: "none"
          },
          false: {
            pointerEvents: "auto"
          }
        }
      }
    });
    var SheetOverlay = SheetOverlayFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(SHEET_OVERLAY_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlayFrame, {
          closed: !context.open || context.hidden,
          ...props,
          onPress: (0, import_core4.mergeEvent)(
            props.onPress,
            context.dismissOnOverlayPress ? () => {
              context.setOpen(false);
            } : void 0
          )
        });
      }
    );
    var selectionStyleSheet = import_core4.isClient ? document.createElement("style") : null;
    if (selectionStyleSheet) {
      document.head.appendChild(selectionStyleSheet);
    }
    var SheetFrameFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: import_SHEET_HANDLE_NAME.SHEET_NAME,
      flex: 1,
      backgroundColor: "$background",
      borderTopLeftRadius: "$4",
      borderTopRightRadius: "$4",
      width: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      pointerEvents: "auto"
    });
    var SheetFrame = SheetFrameFrame.extractable(
      (0, import_react.forwardRef)(({ __scopeSheet, ...props }, forwardedRef) => {
        const context = (0, import_SheetContext.useSheetContext)(import_SHEET_HANDLE_NAME.SHEET_NAME, __scopeSheet);
        const composedContentRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.contentRef);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetFrameFrame, {
          ref: composedContentRef,
          ...props
        });
      })
    );
    var HIDDEN_SIZE = 1e4;
    var sheetComponents = {
      Handle: SheetHandle,
      Frame: SheetFrame,
      Overlay: SheetOverlay,
      ScrollView: import_SheetScrollView.SheetScrollView
    };
    var Sheet = (0, import_core4.withStaticProperties)(
      (0, import_core4.themeable)(
        (0, import_react.forwardRef)(/* @__PURE__ */ __name(function Sheet2(props, ref) {
          const {
            __scopeSheet,
            snapPoints: snapPointsProp = [80],
            open: openProp,
            defaultOpen,
            children: childrenProp,
            position: positionProp,
            onPositionChange,
            onOpenChange,
            defaultPosition,
            dismissOnOverlayPress = true,
            animationConfig,
            dismissOnSnapToBottom = false,
            disableDrag: disableDragProp,
            modal = false,
            handleDisableScroll = true,
            zIndex: zIndex2 = 40
          } = props;
          if (process.env.NODE_ENV === "development") {
            if (snapPointsProp.some((p) => p < 0 || p > 100)) {
              console.warn(
                `\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame`
              );
            }
          }
          const driver = (0, import_core4.getAnimationDriver)();
          if (!driver) {
            throw new Error(`Must set animations in tamagui.config.ts`);
          }
          const controller = (0, import_react.useContext)(SheetControllerContext);
          const isHidden = (controller == null ? void 0 : controller.hidden) || false;
          const disableDrag = disableDragProp ?? (controller == null ? void 0 : controller.disableDrag);
          const themeName = (0, import_core4.useThemeName)();
          const contentRef = import_react.default.useRef(null);
          const scrollBridge = (0, import_core4.useConstant)(() => ({
            enabled: false,
            y: 0,
            paneY: 0,
            paneMinY: 0,
            scrollStartY: -1,
            drag: () => {
            },
            release: () => {
            },
            scrollLock: false
          }));
          const onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
            var _a;
            (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val);
            onOpenChange == null ? void 0 : onOpenChange(val);
          }, "onOpenChangeInternal");
          const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
            prop: (controller == null ? void 0 : controller.open) ?? openProp,
            defaultProp: defaultOpen || true,
            onChange: onOpenChangeInternal,
            strategy: "most-recent-wins"
          });
          const [frameSize, setFrameSize] = (0, import_react.useState)(0);
          const snapPoints = (0, import_react.useMemo)(
            () => dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
            [JSON.stringify(snapPointsProp), dismissOnSnapToBottom]
          );
          const [position_, setPosition_] = (0, import_use_controllable_state.useControllableState)({
            prop: positionProp,
            defaultProp: defaultPosition || (open ? 0 : -1),
            onChange: onPositionChange,
            strategy: "most-recent-wins"
          });
          const position = open === false ? -1 : position_;
          if (open && dismissOnSnapToBottom && position === snapPoints.length - 1) {
            setPosition_(0);
          }
          const setPosition = (0, import_react.useCallback)(
            (next) => {
              if (dismissOnSnapToBottom && next === snapPoints.length - 1) {
                setOpen(false);
              } else {
                setPosition_(next);
              }
            },
            [dismissOnSnapToBottom, snapPoints.length, setPosition_, setOpen]
          );
          const animatedNumber = driver.useAnimatedNumber(HIDDEN_SIZE);
          const at = (0, import_react.useRef)(0);
          driver.useAnimatedNumberReaction(animatedNumber, (value) => {
            at.current = value;
            scrollBridge.paneY = value;
          });
          const [isResizing, setIsResizing] = (0, import_react.useState)(true);
          (0, import_core4.useIsomorphicLayoutEffect)(() => {
            if (!isResizing) {
              setIsResizing(true);
            }
          }, [modal]);
          function stopSpring() {
            animatedNumber.stop();
            if (scrollBridge.onFinishAnimate) {
              scrollBridge.onFinishAnimate();
              scrollBridge.onFinishAnimate = void 0;
            }
          }
          __name(stopSpring, "stopSpring");
          const shouldSetPositionOpen = open && position < 0;
          (0, import_react.useEffect)(() => {
            if (shouldSetPositionOpen) {
              setPosition(0);
            }
          }, [setPosition, shouldSetPositionOpen]);
          const positions = (0, import_react.useMemo)(
            () => snapPoints.map((point) => getPercentSize(point, frameSize)),
            [frameSize, snapPoints]
          );
          const animateTo = (0, import_core4.useEvent)((position2) => {
            const current = animatedNumber.getValue();
            if (isHidden && open)
              return;
            if (!current)
              return;
            if (frameSize === 0)
              return;
            const hiddenValue = frameSize === 0 ? HIDDEN_SIZE : frameSize;
            const toValue = isHidden || position2 === -1 ? hiddenValue : positions[position2];
            if (at.current === toValue)
              return;
            stopSpring();
            if (isHidden || isResizing) {
              if (isResizing) {
                setIsResizing(false);
              }
              animatedNumber.setValue(toValue, {
                type: "timing",
                duration: 0
              });
              at.current = toValue;
              return;
            }
            const overshootClamping = at.current === HIDDEN_SIZE;
            animatedNumber.setValue(toValue, {
              ...animationConfig,
              type: "spring",
              overshootClamping
            });
          });
          (0, import_core4.useIsomorphicLayoutEffect)(() => {
            animateTo(position);
          }, [isHidden, frameSize, position, animateTo]);
          const panResponder = (0, import_react.useMemo)(
            () => {
              if (disableDrag)
                return;
              if (!frameSize)
                return;
              const minY = positions[0];
              scrollBridge.paneMinY = minY;
              let startY = at.current;
              function makeUnselectable(val) {
                if (!selectionStyleSheet)
                  return;
                if (!val) {
                  selectionStyleSheet.innerText = ``;
                } else {
                  selectionStyleSheet.innerText = `:root * { user-select: none !important; -webkit-user-select: none !important; }`;
                }
              }
              __name(makeUnselectable, "makeUnselectable");
              const release = /* @__PURE__ */ __name(({ vy, dragAt }) => {
                isExternalDrag = false;
                previouslyScrolling = false;
                makeUnselectable(false);
                const at2 = dragAt + startY;
                const end = at2 + frameSize * vy * 0.2;
                let closestPoint = 0;
                let dist = Infinity;
                for (let i = 0; i < positions.length; i++) {
                  const position2 = positions[i];
                  const curDist = end > position2 ? end - position2 : position2 - end;
                  if (curDist < dist) {
                    dist = curDist;
                    closestPoint = i;
                  }
                }
                setPosition(closestPoint);
                animateTo(closestPoint);
              }, "release");
              const finish = /* @__PURE__ */ __name((_e, state) => {
                release({
                  vy: state.vy,
                  dragAt: state.dy
                });
              }, "finish");
              let previouslyScrolling = false;
              const onMoveShouldSet = /* @__PURE__ */ __name((_e, { dy }) => {
                const isScrolled = scrollBridge.y !== 0;
                if (isScrolled) {
                  previouslyScrolling = true;
                  return false;
                }
                if (previouslyScrolling) {
                  previouslyScrolling = false;
                  return true;
                }
                const isDraggingUp = dy < 0;
                const isAtTop = scrollBridge.paneY <= scrollBridge.paneMinY;
                if (isAtTop) {
                  if (!isScrolled && isDraggingUp) {
                    return false;
                  }
                }
                return Math.abs(dy) > 8;
              }, "onMoveShouldSet");
              const grant = /* @__PURE__ */ __name(() => {
                makeUnselectable(true);
                stopSpring();
                startY = at.current;
              }, "grant");
              let isExternalDrag = false;
              scrollBridge.drag = (dy) => {
                if (!isExternalDrag) {
                  isExternalDrag = true;
                  grant();
                }
                const to = dy + startY;
                animatedNumber.setValue(resisted(to, minY), { type: "direct" });
              };
              scrollBridge.release = release;
              return import_react_native3.PanResponder.create({
                onMoveShouldSetPanResponder: onMoveShouldSet,
                onPanResponderGrant: grant,
                onPanResponderMove: (_e, { dy }) => {
                  const toFull = dy + startY;
                  const to = resisted(toFull, minY);
                  animatedNumber.setValue(to, { type: "direct" });
                },
                onPanResponderEnd: finish,
                onPanResponderTerminate: finish,
                onPanResponderRelease: finish
              });
            },
            [disableDrag, animateTo, frameSize, positions, setPosition]
          );
          let handleComponent = null;
          let overlayComponent = null;
          let frameComponent = null;
          import_react.default.Children.forEach(childrenProp, (child) => {
            var _a, _b;
            if ((0, import_react.isValidElement)(child)) {
              const name = (_b = (_a = child.type) == null ? void 0 : _a["staticConfig"]) == null ? void 0 : _b.componentName;
              switch (name) {
                case "SheetHandle":
                  handleComponent = child;
                  break;
                case "Sheet":
                  frameComponent = child;
                  break;
                case "SheetOverlay":
                  overlayComponent = child;
                  break;
                default:
                  console.warn("Warning: passed invalid child to Sheet", child);
              }
            }
          });
          const preventShown = (controller == null ? void 0 : controller.hidden) && (controller == null ? void 0 : controller.open);
          const animatedStyle = driver.useAnimatedNumberStyle(animatedNumber, (val) => {
            return {
              transform: [{ translateY: frameSize === 0 ? HIDDEN_SIZE : val }]
            };
          });
          const AnimatedView = driver["NumberView"] ?? driver.View;
          const [isShowingInnerSheet, setIsShowingInnerSheet] = (0, import_react.useState)(false);
          const shouldHideParentSheet = !import_core4.isWeb && modal && isShowingInnerSheet;
          const parentSheetContext = (0, import_react.useContext)(SheetInsideSheetContext);
          const onInnerSheet = (0, import_react.useCallback)((hasChild) => {
            setIsShowingInnerSheet(hasChild);
          }, []);
          (0, import_core4.useIsomorphicLayoutEffect)(() => {
            if (!parentSheetContext || !open)
              return;
            parentSheetContext(true);
            return () => {
              parentSheetContext(false);
            };
          }, [parentSheetContext, open]);
          const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_SheetContext.SheetProvider, {
            modal,
            contentRef,
            dismissOnOverlayPress,
            dismissOnSnapToBottom,
            open,
            hidden: isHidden,
            scope: __scopeSheet,
            position,
            snapPoints,
            setPosition,
            setOpen,
            scrollBridge,
            children: [
              isResizing || shouldHideParentSheet ? null : overlayComponent,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedView, {
                ref,
                ...panResponder == null ? void 0 : panResponder.panHandlers,
                onLayout: (e) => {
                  const next = e.nativeEvent.layout.height;
                  setFrameSize((prev) => {
                    const isBigChange = Math.abs(prev - next) > 50;
                    setIsResizing(isBigChange);
                    return next;
                  });
                },
                pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
                style: [
                  {
                    position: "absolute",
                    zIndex: zIndex2,
                    width: "100%",
                    height: "100%",
                    opacity: shouldHideParentSheet ? 0 : 1
                  },
                  animatedStyle
                ],
                children: [
                  handleComponent,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
                    enabled: open && modal && handleDisableScroll,
                    as: import_core4.Slot,
                    allowPinchZoom: true,
                    shards: [contentRef],
                    removeScrollBar: false,
                    children: isResizing ? null : frameComponent
                  })
                ]
              })
            ]
          });
          if (preventShown) {
            return null;
          }
          if (modal) {
            const modalContents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.Portal, {
              zIndex: zIndex2,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Theme, {
                name: themeName,
                children: contents
              })
            });
            if (import_core4.isWeb) {
              return modalContents;
            }
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetInsideSheetContext.Provider, {
              value: onInnerSheet,
              children: modalContents
            });
          }
          return contents;
        }, "Sheet2"))
      ),
      sheetComponents
    );
    var SheetInsideSheetContext = (0, import_react.createContext)(null);
    var ControlledSheet = Sheet;
    function getPercentSize(point, frameSize) {
      if (!frameSize)
        return 0;
      if (point === void 0) {
        console.warn(`No snapPoint`);
        return 0;
      }
      const pct = point / 100;
      const next = Math.round(frameSize - pct * frameSize);
      return next;
    }
    __name(getPercentSize, "getPercentSize");
    function resisted(y, minY, maxOverflow = 25) {
      if (y < minY) {
        const past = minY - y;
        const pctPast = Math.min(maxOverflow, past) / maxOverflow;
        const diminishBy = 1.1 - Math.pow(0.1, pctPast);
        const extra = -diminishBy * maxOverflow;
        return minY + extra;
      }
      return y;
    }
    __name(resisted, "resisted");
    var SheetControllerContext = (0, import_react.createContext)(null);
    var SheetController = /* @__PURE__ */ __name(({
      children,
      onOpenChange: onOpenChangeProp,
      ...value
    }) => {
      const onOpenChange = (0, import_core4.useEvent)(onOpenChangeProp);
      const memoValue = (0, import_react.useMemo)(
        () => ({
          open: value.open,
          hidden: value.hidden,
          disableDrag: value.disableDrag,
          onOpenChange
        }),
        [onOpenChange, value.open, value.hidden, value.disableDrag]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetControllerContext.Provider, {
        value: memoValue,
        children
      });
    }, "SheetController");
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Sheet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableText_exports = {};
    __export2(SizableText_exports, {
      SizableText: () => SizableText
    });
    module2.exports = __toCommonJS2(SizableText_exports);
    var import_core4 = require("@tamagui/core-node");
    var SizableText = (0, import_core4.styled)(
      import_core4.Text,
      {
        name: "SizableText",
        fontFamily: "$body",
        variants: {
          size: import_core4.getFont
        },
        defaultVariants: {
          size: "$4"
        }
      },
      {
        inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"])
      }
    );
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Paragraph_exports = {};
    __export2(Paragraph_exports, {
      Paragraph: () => Paragraph
    });
    module2.exports = __toCommonJS2(Paragraph_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_SizableText = require_SizableText();
    var Paragraph = (0, import_core4.styled)(import_SizableText.SizableText, {
      name: "Paragraph",
      tag: "p",
      selectable: true,
      cursor: "text"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Headings_exports = {};
    __export2(Headings_exports, {
      H1: () => H1,
      H2: () => H2,
      H3: () => H3,
      H4: () => H4,
      H5: () => H5,
      H6: () => H6,
      Heading: () => Heading
    });
    module2.exports = __toCommonJS2(Headings_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_Paragraph = require_Paragraph();
    var Heading = (0, import_core4.styled)(import_Paragraph.Paragraph, {
      tag: "span",
      name: "Heading",
      accessibilityRole: "header",
      fontFamily: "$heading",
      size: "$8",
      margin: 0
    });
    var H1 = (0, import_core4.styled)(Heading, {
      name: "H1",
      tag: "h1",
      size: "$10"
    });
    var H2 = (0, import_core4.styled)(Heading, {
      name: "H2",
      tag: "h2",
      size: "$9"
    });
    var H3 = (0, import_core4.styled)(Heading, {
      name: "H3",
      tag: "h3",
      size: "$8"
    });
    var H4 = (0, import_core4.styled)(Heading, {
      name: "H4",
      tag: "h4",
      size: "$7"
    });
    var H5 = (0, import_core4.styled)(Heading, {
      name: "H5",
      tag: "h5",
      size: "$6"
    });
    var H6 = (0, import_core4.styled)(Heading, {
      name: "H6",
      tag: "h6",
      size: "$5"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var wrapChildrenInText_exports = {};
    __export2(wrapChildrenInText_exports, {
      wrapChildrenInText: () => wrapChildrenInText
    });
    module2.exports = __toCommonJS2(wrapChildrenInText_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react = __toESM2(require("react"));
    function wrapChildrenInText(TextComponent, propsIn) {
      const {
        children,
        textProps,
        size: size2,
        noTextWrap,
        color: color2,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign
      } = propsIn;
      if (noTextWrap || !children) {
        return children;
      }
      const allChildren = import_react.default.Children.toArray(children);
      const nextChildren = [];
      let lastIsString = false;
      const props = {};
      if (color2)
        props.color = color2;
      if (fontFamily)
        props.fontFamily = fontFamily;
      if (fontSize)
        props.fontSize = fontSize;
      if (fontWeight)
        props.fontWeight = fontWeight;
      if (letterSpacing)
        props.letterSpacing = letterSpacing;
      if (textAlign)
        props.textAlign = textAlign;
      if (size2)
        props.size = size2;
      function concatStringChildren() {
        if (!lastIsString)
          return;
        const index = nextChildren.length - 1;
        const childrenStrings = nextChildren[index];
        nextChildren[index] = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextComponent, {
          ...props,
          ...textProps,
          children: childrenStrings
        }, index);
      }
      __name(concatStringChildren, "concatStringChildren");
      for (const child of allChildren) {
        const last = nextChildren[nextChildren.length - 1];
        const isString = typeof child === "string";
        if (isString) {
          if (lastIsString) {
            last.push(child);
          } else {
            nextChildren.push([child]);
          }
        } else {
          concatStringChildren();
          nextChildren.push(child);
        }
        lastIsString = isString;
      }
      concatStringChildren();
      return nextChildren;
    }
    __name(wrapChildrenInText, "wrapChildrenInText");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/types.js
var require_types = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_SizableText(), module2.exports);
    __reExport2(src_exports, require_Paragraph(), module2.exports);
    __reExport2(src_exports, require_Headings(), module2.exports);
    __reExport2(src_exports, require_wrapChildrenInText(), module2.exports);
    __reExport2(src_exports, require_types(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dialog/dist/cjs/Dialog.js
var require_Dialog = __commonJS({
  "../../node_modules/@tamagui/dialog/dist/cjs/Dialog.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dialog_exports = {};
    __export2(Dialog_exports, {
      Dialog: () => Dialog2,
      DialogClose: () => DialogClose,
      DialogContent: () => DialogContent,
      DialogDescription: () => DialogDescription,
      DialogOverlay: () => DialogOverlay,
      DialogPortal: () => DialogPortal,
      DialogPortalFrame: () => DialogPortalFrame,
      DialogSheetContents: () => DialogSheetContents,
      DialogTitle: () => DialogTitle,
      DialogTrigger: () => DialogTrigger,
      DialogWarningProvider: () => DialogWarningProvider,
      createDialogScope: () => createDialogScope
    });
    module2.exports = __toCommonJS2(Dialog_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_animate_presence = require_cjs();
    var import_aria_hidden = require_cjs4();
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_dismissable = require_cjs6();
    var import_focus_scope = require_cjs7();
    var import_portal = require_cjs9();
    var import_remove_scroll = require_cjs10();
    var import_sheet = require_cjs13();
    var import_stacks = require_cjs8();
    var import_text = require_cjs14();
    var import_use_controllable_state = require_cjs11();
    var React3 = __toESM2(require("react"));
    var DIALOG_NAME = "Dialog";
    var [createDialogContext, createDialogScope] = (0, import_create_context.createContextScope)(DIALOG_NAME);
    var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
    var TRIGGER_NAME = "DialogTrigger";
    var DialogTriggerFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: TRIGGER_NAME
    });
    var DialogTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...triggerProps } = props;
        const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
        const composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.triggerRef);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTriggerFrame, {
          tag: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "aria-controls": context.contentId,
          "data-state": getState(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onPress: (0, import_core4.composeEventHandlers)(props.onPress, context.onOpenToggle)
        });
      }
    );
    DialogTrigger.displayName = TRIGGER_NAME;
    var PORTAL_NAME = "DialogPortal";
    var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
      forceMount: void 0
    });
    var DialogPortalFrame = (0, import_core4.styled)(import_stacks.YStack, {
      alignItems: "center",
      justifyContent: "center",
      fullscreen: true,
      zIndex: 100,
      ...import_core4.isWeb && {
        maxHeight: "100vh"
      }
    });
    var DialogPortal = DialogPortalFrame.extractable(
      (props) => {
        const { __scopeDialog, forceMount, children, ...frameProps } = props;
        const themeName = (0, import_core4.useThemeName)();
        const context = useDialogContext(PORTAL_NAME, __scopeDialog);
        const isShowing = forceMount || context.open;
        const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
          children: isShowing ? children : null
        });
        const isSheet = useShowDialogSheet(context);
        if (!context.modal || isSheet) {
          return contents;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
          name: `${context.scopeKey}SheetContents`,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
            scope: __scopeDialog,
            ...context,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Theme, {
              name: themeName,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
                scope: __scopeDialog,
                forceMount,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortalFrame, {
                  pointerEvents: isShowing ? "auto" : "none",
                  ...frameProps,
                  children: contents
                })
              })
            })
          })
        });
      }
    );
    DialogPortal.displayName = PORTAL_NAME;
    var OVERLAY_NAME = "DialogOverlay";
    var DialogOverlayFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: OVERLAY_NAME,
      backgrounded: true,
      fullscreen: true
    });
    var DialogOverlay = React3.forwardRef(
      ({ __scopeDialog, ...props }, forwardedRef) => {
        const portalContext = usePortalContext(OVERLAY_NAME, __scopeDialog);
        const { forceMount = portalContext.forceMount, ...overlayProps } = props;
        const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
        const showSheet = useShowDialogSheet(context);
        if (!forceMount) {
          if (!context.modal || showSheet) {
            return null;
          }
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
          context,
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    DialogOverlay.displayName = OVERLAY_NAME;
    var DialogOverlayImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const { context, ...overlayProps } = props;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
          enabled: context.open,
          as: import_core4.Slot,
          allowPinchZoom: context.allowPinchZoom,
          shards: [context.contentRef],
          removeScrollBar: false,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayFrame, {
            "data-state": getState(context.open),
            pointerEvents: context.open ? "auto" : "none",
            ...overlayProps,
            ref: forwardedRef
          })
        });
      }
    );
    var CONTENT_NAME = "DialogContent";
    var DialogContentFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: CONTENT_NAME,
      tag: "dialog",
      position: "relative",
      backgrounded: true,
      padded: true,
      radiused: true,
      elevate: true,
      variants: {
        size: {
          "...size": (val, extras) => {
            return {};
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var DialogContent = DialogContentFrame.extractable(
      React3.forwardRef(
        ({ __scopeDialog, ...props }, forwardedRef) => {
          const portalContext = usePortalContext(CONTENT_NAME, __scopeDialog);
          const { forceMount = portalContext.forceMount, ...contentProps } = props;
          const context = useDialogContext(CONTENT_NAME, __scopeDialog);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
            children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
              context,
              ...contentProps,
              ref: forwardedRef
            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
              context,
              ...contentProps,
              ref: forwardedRef
            })
          });
        }
      )
    );
    DialogContent.displayName = CONTENT_NAME;
    var DialogContentModal = React3.forwardRef(
      ({ children, context, ...props }, forwardedRef) => {
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
        React3.useEffect(() => {
          if (!context.open)
            return;
          const content = contentRef.current;
          if (content)
            return (0, import_aria_hidden.hideOthers)(content);
        }, [context.open]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
          ...props,
          context,
          ref: composedRefs,
          trapFocus: context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core4.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: (0, import_core4.composeEventHandlers)(props.onPointerDownOutside, (event) => {
            const originalEvent = event["detail"].originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick)
              event.preventDefault();
          }),
          onFocusOutside: (0, import_core4.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault()
          ),
          children
        });
      }
    );
    var DialogContentNonModal = React3.forwardRef(
      (props, forwardedRef) => {
        const hasInteractedOutsideRef = React3.useRef(false);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
          ...props,
          ref: forwardedRef,
          trapFocus: false,
          disableOutsidePointerEvents: false,
          onCloseAutoFocus: (event) => {
            var _a, _b;
            console.log("on close autofocus");
            (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented) {
              if (!hasInteractedOutsideRef.current) {
                (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
              }
              event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
          },
          onInteractOutside: (event) => {
            var _a;
            (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented)
              hasInteractedOutsideRef.current = true;
            const target = event.target;
            const trigger = props.context.triggerRef.current;
            if (!(trigger instanceof HTMLElement))
              return;
            const targetIsTrigger = trigger.contains(target);
            if (targetIsTrigger)
              event.preventDefault();
          }
        });
      }
    );
    var DialogContentImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeDialog,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          context,
          ...contentProps
        } = props;
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef);
        const showSheet = useShowDialogSheet(context);
        const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentFrame, {
          id: context.contentId,
          "aria-describedby": context.descriptionId,
          "aria-labelledby": context.titleId,
          "data-state": getState(context.open),
          ...contentProps
        });
        if (showSheet) {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: contentProps.children
          });
        }
        if (!import_core4.isWeb) {
          return contents;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
              loop: true,
              trapped: trapFocus,
              onMountAutoFocus: onOpenAutoFocus,
              forceUnmount: !context.open,
              onUnmountAutoFocus: onCloseAutoFocus,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
                disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
                forceUnmount: !context.open,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                ref: composedRefs,
                onDismiss: () => context.onOpenChange(false),
                children: contents
              })
            }),
            process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleWarning, {
                  titleId: context.titleId
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, {
                  contentRef,
                  descriptionId: context.descriptionId
                })
              ]
            })
          ]
        });
      }
    );
    var SHEET_CONTENTS_NAME = "DialogSheetContents";
    var DialogSheetContents = /* @__PURE__ */ __name(({ __scopeDialog }) => {
      const context = useDialogContext(SHEET_CONTENTS_NAME, __scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
        name: `${context.scopeKey}SheetContents`
      });
    }, "DialogSheetContents");
    DialogSheetContents.displayName = SHEET_CONTENTS_NAME;
    var TITLE_NAME = "DialogTitle";
    var DialogTitleFrame = (0, import_core4.styled)(import_text.H2, {
      name: TITLE_NAME
    });
    var DialogTitle = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...titleProps } = props;
        const context = useDialogContext(TITLE_NAME, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitleFrame, {
          id: context.titleId,
          ...titleProps,
          ref: forwardedRef
        });
      }
    );
    DialogTitle.displayName = TITLE_NAME;
    var DialogDescriptionFrame = (0, import_core4.styled)(import_text.Paragraph, {
      name: "DialogDescription"
    });
    var DESCRIPTION_NAME = "DialogDescription";
    var DialogDescription = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...descriptionProps } = props;
        const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescriptionFrame, {
          id: context.descriptionId,
          ...descriptionProps,
          ref: forwardedRef
        });
      }
    );
    DialogDescription.displayName = DESCRIPTION_NAME;
    var CLOSE_NAME = "DialogClose";
    var DialogClose = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...closeProps } = props;
        const context = useDialogContext(CLOSE_NAME, __scopeDialog);
        const isSheet = useShowDialogSheet(context);
        if (isSheet) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          tag: "button",
          ...closeProps,
          ref: forwardedRef,
          onPress: (0, import_core4.composeEventHandlers)(props.onPress, () => context.onOpenChange(false))
        });
      }
    );
    DialogClose.displayName = CLOSE_NAME;
    function getState(open) {
      return open ? "open" : "closed";
    }
    __name(getState, "getState");
    var TITLE_WARNING_NAME = "DialogTitleWarning";
    var [DialogWarningProvider, useWarningContext] = (0, import_create_context.createContext)(TITLE_WARNING_NAME, {
      contentName: CONTENT_NAME,
      titleName: TITLE_NAME,
      docsSlug: "dialog"
    });
    var TitleWarning = /* @__PURE__ */ __name(({ titleId }) => {
      const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
      const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
      React3.useEffect(() => {
        if (!import_core4.isWeb)
          return;
        if (titleId) {
          const hasTitle = document.getElementById(titleId);
          if (!hasTitle)
            throw new Error(MESSAGE);
        }
      }, [MESSAGE, titleId]);
      return null;
    }, "TitleWarning");
    var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
    var DescriptionWarning = /* @__PURE__ */ __name(({ contentRef, descriptionId }) => {
      const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
      const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
      React3.useEffect(() => {
        if (!import_core4.isWeb)
          return;
        const contentNode = contentRef.current;
        if (!(contentNode instanceof HTMLElement)) {
          return;
        }
        const describedById = contentNode.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
          const hasDescription = document.getElementById(descriptionId);
          if (!hasDescription)
            console.warn(MESSAGE);
        }
      }, [MESSAGE, contentRef, descriptionId]);
      return null;
    }, "DescriptionWarning");
    var DialogInner = React3.forwardRef(/* @__PURE__ */ __name(function Dialog3(props, ref) {
      const {
        __scopeDialog,
        children,
        open: openProp,
        defaultOpen = false,
        onOpenChange,
        modal = true,
        allowPinchZoom = false,
        sheetBreakpoint = false
      } = props;
      const triggerRef = React3.useRef(null);
      const contentRef = React3.useRef(null);
      const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      React3.useImperativeHandle(
        ref,
        () => ({
          open: setOpen
        }),
        [setOpen]
      );
      const scopeId = (0, import_core4.useId)();
      const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
        scope: __scopeDialog,
        scopeKey,
        triggerRef,
        contentRef,
        contentId: (0, import_core4.useId)() || "",
        titleId: (0, import_core4.useId)() || "",
        descriptionId: (0, import_core4.useId)() || "",
        open,
        onOpenChange: setOpen,
        onOpenToggle: React3.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        modal,
        allowPinchZoom,
        sheetBreakpoint,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogSheetController, {
          onOpenChange: setOpen,
          __scopeDialog,
          children
        })
      });
    }, "Dialog"));
    var Dialog2 = (0, import_core4.withStaticProperties)(DialogInner, {
      Trigger: DialogTrigger,
      Portal: DialogPortal,
      Overlay: DialogOverlay,
      Content: DialogContent,
      Title: DialogTitle,
      Description: DialogDescription,
      Close: DialogClose,
      SheetContents: DialogSheetContents,
      Sheet: import_sheet.ControlledSheet
    });
    var DialogSheetController = /* @__PURE__ */ __name((props) => {
      const context = useDialogContext("DialogSheetController", props.__scopeDialog);
      const showSheet = useShowDialogSheet(context);
      const breakpointActive = useSheetBreakpointActive(context);
      const getShowSheet = (0, import_core4.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sheet.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "DialogSheetController");
    var useSheetBreakpointActive = /* @__PURE__ */ __name((context) => {
      const media = (0, import_core4.useMedia)();
      return context.sheetBreakpoint ? media[context.sheetBreakpoint] : false;
    }, "useSheetBreakpointActive");
    var useShowDialogSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSheetBreakpointActive(context);
      return context.open === false ? false : breakpointActive;
    }, "useShowDialogSheet");
  }
});

// ../../node_modules/@tamagui/dialog/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "../../node_modules/@tamagui/dialog/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Dialog(), module2.exports);
  }
});

// ../../node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js
var require_AlertDialog = __commonJS({
  "../../node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AlertDialog_exports = {};
    __export2(AlertDialog_exports, {
      AlertDialog: () => AlertDialog,
      AlertDialogAction: () => AlertDialogAction,
      AlertDialogCancel: () => AlertDialogCancel,
      AlertDialogContent: () => AlertDialogContent,
      AlertDialogDescription: () => AlertDialogDescription,
      AlertDialogOverlay: () => AlertDialogOverlay,
      AlertDialogPortal: () => AlertDialogPortal,
      AlertDialogTitle: () => AlertDialogTitle,
      AlertDialogTrigger: () => AlertDialogTrigger,
      createAlertDialogScope: () => createAlertDialogScope
    });
    module2.exports = __toCommonJS2(AlertDialog_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_dialog = require_cjs15();
    var import_stacks = require_cjs8();
    var import_use_controllable_state = require_cjs11();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var ROOT_NAME = "AlertDialog";
    var [createAlertDialogContext, createAlertDialogScope] = (0, import_create_context.createContextScope)(ROOT_NAME, [
      import_dialog.createDialogScope
    ]);
    var useDialogScope = (0, import_dialog.createDialogScope)();
    var TRIGGER_NAME = "AlertDialogTrigger";
    var NativeAlertDialogTriggerFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: "DialogTrigger"
    });
    var AlertDialogTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        if (props["__native"]) {
          const { __native, onPress, __onPress, ...rest } = props;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeAlertDialogTriggerFrame, {
            ...rest,
            onPress: (0, import_core4.composeEventHandlers)(onPress, __onPress)
          });
        }
        const { __scopeAlertDialog, ...triggerProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTrigger, {
          ...dialogScope,
          ...triggerProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogTrigger.displayName = TRIGGER_NAME;
    var PORTAL_NAME = "AlertDialogPortal";
    var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, ...portalProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogPortal, {
        ...dialogScope,
        ...portalProps
      });
    }, "AlertDialogPortal");
    AlertDialogPortal.displayName = PORTAL_NAME;
    var OVERLAY_NAME = "AlertDialogOverlay";
    var AlertDialogOverlay = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...overlayProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogOverlay, {
          ...dialogScope,
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogOverlay.displayName = OVERLAY_NAME;
    var CONTENT_NAME = "AlertDialogContent";
    var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
    var AlertDialogContent = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, children, ...contentProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef);
        const cancelRef = React3.useRef(null);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogWarningProvider, {
          contentName: CONTENT_NAME,
          titleName: TITLE_NAME,
          docsSlug: "alert-dialog",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
            scope: __scopeAlertDialog,
            cancelRef,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogContent, {
              role: "alertdialog",
              ...dialogScope,
              ...contentProps,
              ref: composedRefs,
              onOpenAutoFocus: (0, import_core4.composeEventHandlers)(contentProps.onOpenAutoFocus, (event) => {
                var _a;
                event.preventDefault();
                if (import_core4.isWeb) {
                  (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
                }
              }),
              onPointerDownOutside: (event) => event.preventDefault(),
              onInteractOutside: (event) => event.preventDefault(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Slottable, {
                  children
                }),
                process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, {
                  contentRef
                })
              ]
            })
          })
        });
      }
    );
    AlertDialogContent.displayName = CONTENT_NAME;
    var TITLE_NAME = "AlertDialogTitle";
    var AlertDialogTitle = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...titleProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, {
          ...dialogScope,
          ...titleProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogTitle.displayName = TITLE_NAME;
    var DESCRIPTION_NAME = "AlertDialogDescription";
    var AlertDialogDescription = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...descriptionProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogDescription, {
          ...dialogScope,
          ...descriptionProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogDescription.displayName = DESCRIPTION_NAME;
    var ACTION_NAME = "AlertDialogAction";
    var AlertDialogAction = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...actionProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogClose, {
          ...dialogScope,
          ...actionProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogAction.displayName = ACTION_NAME;
    var CANCEL_NAME = "AlertDialogCancel";
    var AlertDialogCancel = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...cancelProps } = props;
        const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const ref = (0, import_compose_refs.useComposedRefs)(forwardedRef, cancelRef);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogClose, {
          ...dialogScope,
          ...cancelProps,
          ref
        });
      }
    );
    AlertDialogCancel.displayName = CANCEL_NAME;
    var DescriptionWarning = /* @__PURE__ */ __name(({ contentRef }) => {
      if (process.env.NODE_ENV === "development") {
        React3.useEffect(() => {
          var _a;
          if (!import_core4.isWeb)
            return;
          const hasDescription = document.getElementById(
            (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
          );
          if (!hasDescription) {
            console.warn(`\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
          }
        }, [contentRef]);
      }
      return null;
    }, "DescriptionWarning");
    var AlertDialogInner = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, native, ...alertDialogProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      if (process.env.TAMAGUI_TARGET === "native") {
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: props.open,
          defaultProp: props.defaultOpen || false,
          onChange: props.onOpenChange
        });
        let triggerElement = null;
        let title = "";
        let description = "";
        const buttons = [];
        forEachChildDeep(React3.Children.toArray(props.children), (child) => {
          if (!React3.isValidElement(child))
            return false;
          const name = (0, import_core4.isTamaguiElement)(child) ? child.type.staticConfig.componentName : child.type["displayName"];
          switch (name) {
            case TRIGGER_NAME: {
              triggerElement = React3.cloneElement(child, {
                __native: true
              });
              return false;
            }
            case TITLE_NAME: {
              title = getStringChildren(child);
              return false;
            }
            case DESCRIPTION_NAME: {
              description = getStringChildren(child);
              return false;
            }
            case ACTION_NAME:
            case CANCEL_NAME: {
              const style = name === ACTION_NAME ? "default" : "cancel";
              const text = getStringChildren(child);
              const onPress = /* @__PURE__ */ __name(() => {
                var _a;
                const childProps = child.props;
                (_a = childProps == null ? void 0 : childProps.onPress) == null ? void 0 : _a.call(childProps, { native: true });
                setOpen(false);
              }, "onPress");
              buttons.push({
                style,
                text,
                onPress
              });
              return false;
            }
            default: {
              return true;
            }
          }
        });
        React3.useLayoutEffect(() => {
          if (!open || !native)
            return;
          if (title || description) {
            import_react_native3.Alert.alert(title, description, buttons);
          }
        }, [native, open]);
        if (native) {
          return React3.cloneElement(triggerElement, {
            __onPress: () => {
              setOpen(true);
            }
          });
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog, {
        ...dialogScope,
        ...alertDialogProps,
        modal: true
      });
    }, "AlertDialogInner");
    function forEachChildDeep(children, onChild) {
      for (const child of children) {
        if (!React3.isValidElement(child))
          continue;
        if (!onChild(child))
          continue;
        if (child.props.children) {
          forEachChildDeep(React3.Children.toArray(child.props.children), onChild);
        }
      }
    }
    __name(forEachChildDeep, "forEachChildDeep");
    function getStringChildren(child) {
      let string = "";
      forEachChildDeep(React3.Children.toArray(child), (child2) => {
        if (typeof child2.props.children === "string") {
          string = child2.props.children;
          return false;
        }
        return true;
      });
      return string;
    }
    __name(getStringChildren, "getStringChildren");
    var AlertDialog = (0, import_core4.withStaticProperties)(AlertDialogInner, {
      Trigger: AlertDialogTrigger,
      Portal: AlertDialogPortal,
      Overlay: AlertDialogOverlay,
      Content: AlertDialogContent,
      Action: AlertDialogAction,
      Cancel: AlertDialogCancel,
      Title: AlertDialogTitle,
      Description: AlertDialogDescription
    });
    AlertDialog.displayName = ROOT_NAME;
  }
});

// ../../node_modules/@tamagui/alert-dialog/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "../../node_modules/@tamagui/alert-dialog/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AlertDialog(), module2.exports);
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Image_exports = {};
    __export2(Image_exports, {
      Image: () => Image
    });
    module2.exports = __toCommonJS2(Image_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    import_react.default["createElement"];
    var StyledImage = (0, import_core4.styled)(
      import_react_native3.Image,
      {
        name: "Image",
        position: "relative",
        source: { uri: "" },
        zIndex: 1
      },
      {
        inlineProps: /* @__PURE__ */ new Set(["src", "width", "height"])
      }
    );
    var Image = StyledImage.extractable((inProps) => {
      const props = (0, import_core4.getExpandedShorthands)(inProps);
      const { src, ...rest } = props;
      const source = typeof src === "string" ? { uri: src, ...import_core4.isWeb && { width: props.width, height: props.height } } : src;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledImage, {
        source,
        ...rest
      });
    });
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Image(), module2.exports);
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js
var require_getShapeSize = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getShapeSize_exports = {};
    __export2(getShapeSize_exports, {
      getShapeSize: () => getShapeSize
    });
    module2.exports = __toCommonJS2(getShapeSize_exports);
    var getShapeSize = /* @__PURE__ */ __name((size2, { tokens: tokens2 }) => {
      const width = tokens2.size[size2] ?? size2;
      const height = tokens2.size[size2] ?? size2;
      return {
        width,
        height,
        minWidth: width,
        maxWidth: width,
        maxHeight: height,
        minHeight: height
      };
    }, "getShapeSize");
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/Square.js
var require_Square = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/Square.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Square_exports = {};
    __export2(Square_exports, {
      Square: () => Square
    });
    module2.exports = __toCommonJS2(Square_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var import_getShapeSize = require_getShapeSize();
    var Square = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "Square",
      alignItems: "center",
      justifyContent: "center",
      backgrounded: true,
      variants: {
        circular: {
          true: {
            borderRadius: 1e5
          }
        },
        size: {
          "...size": import_getShapeSize.getShapeSize
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/Circle.js
var require_Circle = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/Circle.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Circle_exports = {};
    __export2(Circle_exports, {
      Circle: () => Circle
    });
    module2.exports = __toCommonJS2(Circle_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_Square = require_Square();
    var Circle = (0, import_core4.styled)(import_Square.Square, {
      name: "Circle",
      circular: true
    });
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Square(), module2.exports);
    __reExport2(src_exports, require_Circle(), module2.exports);
    __reExport2(src_exports, require_getShapeSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/avatar/dist/cjs/Avatar.js
var require_Avatar = __commonJS({
  "../../node_modules/@tamagui/avatar/dist/cjs/Avatar.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Avatar_exports = {};
    __export2(Avatar_exports, {
      Avatar: () => Avatar,
      AvatarFallback: () => AvatarFallback,
      AvatarFallbackFrame: () => AvatarFallbackFrame,
      AvatarFrame: () => AvatarFrame,
      AvatarImage: () => AvatarImage,
      createAvatarScope: () => createAvatarScope
    });
    module2.exports = __toCommonJS2(Avatar_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_image = require_cjs17();
    var import_shapes = require_cjs18();
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var AVATAR_NAME = "Avatar";
    var [createAvatarContext, createAvatarScope] = (0, import_create_context.createContextScope)(AVATAR_NAME);
    var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
    var IMAGE_NAME = "AvatarImage";
    var AvatarImage = React3.forwardRef(
      (props, forwardedRef) => {
        var _a;
        const { __scopeAvatar, src, onLoadingStatusChange = /* @__PURE__ */ __name(() => {
        }, "onLoadingStatusChange"), ...imageProps } = props;
        const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
        const [status, setStatus] = React3.useState("idle");
        const extras = (0, import_core4.getVariantExtras)(props);
        const shapeSize = (0, import_core4.getVariableValue)((_a = (0, import_shapes.getShapeSize)(context.size, extras)) == null ? void 0 : _a.width);
        React3.useEffect(() => {
          setStatus("idle");
        }, [JSON.stringify(src)]);
        React3.useEffect(() => {
          onLoadingStatusChange(status);
          context.onImageLoadingStatusChange(status);
        }, [status]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          fullscreen: true,
          zIndex: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.Image, {
            fullscreen: true,
            ...typeof shapeSize === "number" && !isNaN(shapeSize) && {
              width: shapeSize,
              height: shapeSize
            },
            ...imageProps,
            ref: forwardedRef,
            src,
            onError: () => {
              setStatus("error");
            },
            onLoad: () => {
              setStatus("loaded");
            }
          })
        });
      }
    );
    AvatarImage.displayName = IMAGE_NAME;
    var FALLBACK_NAME = "AvatarFallback";
    var AvatarFallbackFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: FALLBACK_NAME,
      position: "absolute",
      fullscreen: true,
      zIndex: 0
    });
    var AvatarFallback = AvatarFallbackFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopeAvatar, delayMs, ...fallbackProps } = props;
          const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
          const [canRender, setCanRender] = React3.useState(delayMs === void 0);
          React3.useEffect(() => {
            if (delayMs !== void 0) {
              const timerId = setTimeout(() => setCanRender(true), delayMs);
              return () => clearTimeout(timerId);
            }
          }, [delayMs]);
          return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallbackFrame, {
            ...fallbackProps,
            ref: forwardedRef
          }) : null;
        }
      )
    );
    AvatarFallback.displayName = FALLBACK_NAME;
    var AvatarFrame = (0, import_core4.styled)(import_shapes.Square, {
      name: AVATAR_NAME,
      position: "relative",
      overflow: "hidden"
    });
    var Avatar = (0, import_core4.withStaticProperties)(
      React3.forwardRef((props, forwardedRef) => {
        const { __scopeAvatar, size: size2 = "$4", ...avatarProps } = props;
        const [imageLoadingStatus, setImageLoadingStatus] = React3.useState("idle");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
          size: size2,
          scope: __scopeAvatar,
          imageLoadingStatus,
          onImageLoadingStatusChange: setImageLoadingStatus,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFrame, {
            size: size2,
            ...avatarProps,
            ref: forwardedRef
          })
        });
      }),
      {
        Image: AvatarImage,
        Fallback: AvatarFallback
      }
    );
    Avatar.displayName = AVATAR_NAME;
  }
});

// ../../node_modules/@tamagui/avatar/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "../../node_modules/@tamagui/avatar/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Avatar(), module2.exports);
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getFontSize_exports = {};
    __export2(getFontSize_exports, {
      getFontSize: () => getFontSize,
      getFontSizeToken: () => getFontSizeToken,
      getFontSizeVariable: () => getFontSizeVariable
    });
    module2.exports = __toCommonJS2(getFontSize_exports);
    var import_core4 = require("@tamagui/core-node");
    var getFontSize = /* @__PURE__ */ __name((inSize, opts) => {
      const res = getFontSizeVariable(inSize, opts);
      if ((0, import_core4.isVariable)(res)) {
        return +res.val;
      }
      return res ? +res : 16;
    }, "getFontSize");
    var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
      const token = getFontSizeToken(inSize, opts);
      if (!token) {
        return inSize;
      }
      const conf = (0, import_core4.getConfig)();
      return conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size[token];
    }, "getFontSizeVariable");
    var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
      if (typeof inSize === "number") {
        return null;
      }
      const size2 = inSize || "$4";
      const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0;
      const conf = (0, import_core4.getConfig)();
      const fontSize = conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size;
      const sizeTokens = Object.keys(fontSize);
      let foundIndex = sizeTokens.indexOf(size2);
      if (foundIndex === -1) {
        if (size2.endsWith(".5")) {
          foundIndex = sizeTokens.indexOf(size2.replace(".5", ""));
        }
      }
      if (process.env.NODE_ENV === "development") {
        if (foundIndex === -1) {
          console.warn("No font size found", inSize, opts, "in size tokens", sizeTokens);
        }
      }
      const tokenIndex = Math.min(Math.max(0, foundIndex + relativeSize), sizeTokens.length - 1);
      return sizeTokens[tokenIndex] ?? size2;
    }, "getFontSizeToken");
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs20 = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_getFontSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var clamp_exports = {};
    __export2(clamp_exports, {
      clamp: () => clamp
    });
    module2.exports = __toCommonJS2(clamp_exports);
    function clamp(value, [min, max]) {
      return Math.min(max, Math.max(min, value));
    }
    __name(clamp, "clamp");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var composeEventHandlers_exports = {};
    __export2(composeEventHandlers_exports, {
      composeEventHandlers: () => composeEventHandlers
    });
    module2.exports = __toCommonJS2(composeEventHandlers_exports);
    function composeEventHandlers(og, next, { checkDefaultPrevented = true } = {}) {
      return /* @__PURE__ */ __name(function composedEventHandler(event) {
        og == null ? void 0 : og(event);
        if (!checkDefaultPrevented || !("defaultPrevented" in event) || "defaultPrevented" in event && !event.defaultPrevented) {
          return next == null ? void 0 : next(event);
        }
      }, "composedEventHandler");
    }
    __name(composeEventHandlers, "composeEventHandlers");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var concatClassName_exports = {};
    __export2(concatClassName_exports, {
      concatClassName: () => concatClassName
    });
    module2.exports = __toCommonJS2(concatClassName_exports);
    function concatClassName(_cn) {
      const cnOrPropObjcet = arguments;
      const usedPrefixes = [];
      let final = "";
      const len = cnOrPropObjcet.length;
      let propObjects = null;
      for (let x = len; x >= 0; x--) {
        const cns = cnOrPropObjcet[x];
        if (!cns)
          continue;
        if (!Array.isArray(cns) && typeof cns !== "string") {
          propObjects = propObjects || [];
          propObjects.push(cns);
          continue;
        }
        const names = Array.isArray(cns) ? cns : cns.split(" ");
        const numNames = names.length;
        for (let i = numNames - 1; i >= 0; i--) {
          const name = names[i];
          if (!name || name === " ")
            continue;
          if (name[0] !== "_") {
            final = name + " " + final;
            continue;
          }
          const splitIndex = name.indexOf("-");
          if (splitIndex < 1) {
            final = name + " " + final;
            continue;
          }
          const nextChar = name[splitIndex + 1];
          const isMediaQuery = nextChar === "_";
          const styleKey = name.slice(1, name.lastIndexOf("-"));
          const mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null;
          const uid = mediaKey ? styleKey + mediaKey : styleKey;
          if (usedPrefixes.indexOf(uid) > -1) {
            continue;
          }
          usedPrefixes.push(uid);
          const propName = styleKey;
          if (propName && propObjects) {
            if (propObjects.some((po) => {
              if (mediaKey) {
                const propKey = pseudoInvert[mediaKey];
                return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
              }
              const res = po && propName in po && po[propName] !== null;
              return res;
            })) {
              continue;
            }
          }
          final = name + " " + final;
        }
      }
      return final;
    }
    __name(concatClassName, "concatClassName");
    var pseudoInvert = {
      hover: "hoverStyle",
      focus: "focusStyle",
      press: "pressStyle"
    };
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var validStyleProps_exports = {};
    __export2(validStyleProps_exports, {
      stylePropsAll: () => stylePropsAll,
      stylePropsText: () => stylePropsText,
      stylePropsTextOnly: () => stylePropsTextOnly,
      stylePropsTransform: () => stylePropsTransform,
      stylePropsView: () => stylePropsView,
      validPseudoKeys: () => validPseudoKeys,
      validStyles: () => validStyles
    });
    module2.exports = __toCommonJS2(validStyleProps_exports);
    var stylePropsTransform = Object.freeze({
      x: true,
      y: true,
      scale: true,
      perspective: true,
      scaleX: true,
      scaleY: true,
      skewX: true,
      skewY: true,
      matrix: true,
      rotate: true,
      rotateY: true,
      rotateX: true,
      rotateZ: true
    });
    var stylePropsView = Object.freeze({
      backfaceVisibility: true,
      backgroundColor: true,
      borderBottomColor: true,
      borderBottomStyle: true,
      borderTopStyle: true,
      borderLeftStyle: true,
      borderRightStyle: true,
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: true,
      borderEndColor: true,
      borderLeftColor: true,
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: true,
      borderRightWidth: true,
      borderStartColor: true,
      borderStyle: true,
      borderTopColor: true,
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      opacity: true,
      transform: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      borderEndWidth: true,
      borderStartWidth: true,
      bottom: true,
      display: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      height: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      right: true,
      start: true,
      top: true,
      width: true,
      zIndex: true,
      direction: true,
      shadowColor: true,
      shadowOffset: true,
      shadowOpacity: true,
      shadowRadius: true,
      ...stylePropsTransform,
      ...process.env.TAMAGUI_TARGET === "web" && {
        overflowX: true,
        overflowY: true,
        userSelect: true,
        cursor: true,
        contain: true,
        pointerEvents: true,
        boxSizing: true,
        boxShadow: true
      }
    });
    var stylePropsTextOnly = Object.freeze({
      color: true,
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      lineHeight: true,
      textAlign: true,
      textDecorationLine: true,
      textDecorationStyle: true,
      textDecorationColor: true,
      textShadowColor: true,
      textShadowOffset: true,
      textShadowRadius: true,
      textTransform: true,
      ...process.env.TAMAGUI_TARGET === "web" && {
        whiteSpace: true,
        wordWrap: true,
        textOverflow: true,
        textDecorationDistance: true,
        userSelect: true,
        selectable: true,
        cursor: true,
        WebkitLineClamp: true,
        WebkitBoxOrient: true
      }
    });
    var stylePropsText = Object.freeze({
      ...stylePropsView,
      ...stylePropsTextOnly
    });
    var stylePropsAll = stylePropsText;
    var validPseudoKeys = Object.freeze({
      enterStyle: true,
      exitStyle: true,
      hoverStyle: true,
      pressStyle: true,
      focusStyle: true
    });
    var validStyles = Object.freeze({
      ...validPseudoKeys,
      ...stylePropsView
    });
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types2 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/log.js
var require_log = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/log.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var log_exports = {};
    __export2(log_exports, {
      log: () => log
    });
    module2.exports = __toCommonJS2(log_exports);
    var log = /* @__PURE__ */ __name((...args) => {
      console.log(...args);
      return args[0];
    }, "log");
  }
});

// ../../node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "../../node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isValidCSSCharCode: () => isValidCSSCharCode,
      simpleHash: () => simpleHash
    });
    module2.exports = __toCommonJS2(src_exports);
    var simpleHash = /* @__PURE__ */ __name((str, hashMin = 10) => {
      let hash = 0;
      let valids = ``;
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        if (isValidCSSCharCode(char) && len <= hashMin) {
          valids += str[i];
        } else {
          hash = (hash << 5) - hash + char;
          hash &= hash;
        }
      }
      return valids + (hash ? new Uint32Array([hash])[0].toString(36) : "");
    }, "simpleHash");
    function isValidCSSCharCode(code) {
      return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code == 95 || code === 45 || code >= 48 && code <= 57;
    }
    __name(isValidCSSCharCode, "isValidCSSCharCode");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_clamp(), module2.exports);
    __reExport2(src_exports, require_composeEventHandlers(), module2.exports);
    __reExport2(src_exports, require_concatClassName(), module2.exports);
    __reExport2(src_exports, require_validStyleProps(), module2.exports);
    __reExport2(src_exports, require_types2(), module2.exports);
    __reExport2(src_exports, require_log(), module2.exports);
    __reExport2(src_exports, require_cjs21(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var prevent_exports = {};
    __export2(prevent_exports, {
      prevent: () => prevent
    });
    module2.exports = __toCommonJS2(prevent_exports);
    var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getSpace_exports = {};
    __export2(getSpace_exports, {
      getSpace: () => getSpace
    });
    module2.exports = __toCommonJS2(getSpace_exports);
    var import_core4 = require("@tamagui/core-node");
    var getSpace = /* @__PURE__ */ __name((token, sizeUpOrDownBy = 0) => {
      const spaces2 = (0, import_core4.getTokens)(true).space;
      const spaceNames = Object.keys(spaces2);
      const key = spaceNames[Math.max(0, spaceNames.indexOf(String(token || "$4")) + sizeUpOrDownBy)];
      return spaces2[key] || spaces2["$4"];
    }, "getSpace");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useCurrentColor_exports = {};
    __export2(useCurrentColor_exports, {
      useCurrentColor: () => useCurrentColor
    });
    module2.exports = __toCommonJS2(useCurrentColor_exports);
    var import_core4 = require("@tamagui/core-node");
    var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
      const theme = (0, import_core4.useTheme)();
      let color2;
      if (theme && colorProp && colorProp in theme) {
        color2 = theme[colorProp];
      } else if (colorProp) {
        color2 = colorProp;
      } else {
        color2 = theme == null ? void 0 : theme.color;
      }
      return (0, import_core4.variableToString)(color2);
    }, "useCurrentColor");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGetThemedIcon_exports = {};
    __export2(useGetThemedIcon_exports, {
      useGetThemedIcon: () => useGetThemedIcon
    });
    module2.exports = __toCommonJS2(useGetThemedIcon_exports);
    var import_react = __toESM2(require("react"));
    var import_useCurrentColor = require_useCurrentColor();
    var useGetThemedIcon = /* @__PURE__ */ __name((props) => {
      const color2 = (0, import_useCurrentColor.useCurrentColor)(props.color);
      return (el) => {
        if (el) {
          if ((0, import_react.isValidElement)(el)) {
            return import_react.default.cloneElement(el, {
              ...props,
              color: color2,
              ...el.props
            });
          }
          return import_react.default.createElement(el, {
            ...props,
            color: color2
          });
        }
        return el;
      };
    }, "useGetThemedIcon");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_cjs22(), module2.exports);
    __reExport2(src_exports, require_prevent(), module2.exports);
    __reExport2(src_exports, require_getSpace(), module2.exports);
    __reExport2(src_exports, require_useCurrentColor(), module2.exports);
    __reExport2(src_exports, require_useGetThemedIcon(), module2.exports);
  }
});

// ../../node_modules/@tamagui/button/dist/cjs/Button.js
var require_Button = __commonJS({
  "../../node_modules/@tamagui/button/dist/cjs/Button.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Button_exports = {};
    __export2(Button_exports, {
      Button: () => Button2,
      ButtonFrame: () => ButtonFrame,
      ButtonText: () => ButtonText,
      buttonStaticConfig: () => buttonStaticConfig,
      useButton: () => useButton
    });
    module2.exports = __toCommonJS2(Button_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_font_size = require_cjs20();
    var import_helpers_tamagui = require_cjs23();
    var import_stacks = require_cjs8();
    var import_text = require_cjs14();
    var import_react = __toESM2(require("react"));
    import_react.default["createElement"];
    var ButtonFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "Button",
      tag: "button",
      focusable: true,
      hoverTheme: true,
      pressTheme: true,
      backgrounded: true,
      borderWidth: 1,
      borderColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexDirection: "row",
      cursor: "pointer",
      pressStyle: {
        borderColor: "transparent"
      },
      hoverStyle: {
        borderColor: "transparent"
      },
      focusStyle: {
        borderColor: "$borderColorFocus"
      },
      variants: {
        size: {
          "...size": import_core4.getButtonSize
        },
        active: {
          true: {
            hoverStyle: {
              backgroundColor: "$background"
            }
          }
        },
        disabled: {
          true: {
            opacity: 0.375,
            pointerEvents: "none"
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var ButtonText = (0, import_core4.styled)(import_text.SizableText, {
      color: "$color",
      userSelect: "none",
      cursor: "pointer",
      flexGrow: 0,
      flexShrink: 1,
      ellipse: true
    });
    function useButton(props, { Text: Text2 = ButtonText } = { Text: ButtonText }) {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space: space2,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 0.66,
        separator,
        color: color2,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        ...rest
      } = props;
      const isInsideButton = import_core4.isRSC ? false : (0, import_react.useContext)(import_core4.ButtonInsideButtonContext);
      const mediaActiveProps = (0, import_core4.useMediaPropsActive)(props);
      const size2 = mediaActiveProps.size || "$4";
      const iconSize = (typeof size2 === "number" ? size2 * 0.5 : (0, import_font_size.getFontSize)(size2)) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color: color2 });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core4.getVariableValue)(iconSize) * scaleSpace;
      const contents = (0, import_text.wrapChildrenInText)(Text2, mediaActiveProps);
      const inner = themedIcon || themedIconAfter ? (0, import_core4.spacedChildren)({
        space: spaceSize,
        spaceFlex,
        separator,
        direction: props.flexDirection === "column" || props.flexDirection === "column-reverse" ? "vertical" : "horizontal",
        children: [themedIcon, contents, themedIconAfter]
      }) : contents;
      return {
        spaceSize,
        isInsideButton,
        props: {
          ...props.disabled && {
            focusable: void 0,
            focusStyle: {
              borderColor: "$background"
            }
          },
          ...isInsideButton && {
            tag: "span"
          },
          ...rest,
          children: import_core4.isRSC ? inner : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.ButtonInsideButtonContext.Provider, {
            value: true,
            children: inner
          })
        }
      };
    }
    __name(useButton, "useButton");
    var ButtonComponent = (0, import_react.forwardRef)(/* @__PURE__ */ __name(function Button3(props, ref) {
      const { props: buttonProps } = useButton(props);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonFrame, {
        ...buttonProps,
        ref
      });
    }, "Button"));
    var buttonStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var Button2 = ButtonFrame.extractable((0, import_core4.themeable)(ButtonComponent), buttonStaticConfig);
  }
});

// ../../node_modules/@tamagui/button/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "../../node_modules/@tamagui/button/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Button(), module2.exports);
  }
});

// ../../node_modules/@tamagui/card/dist/cjs/Card.js
var require_Card = __commonJS({
  "../../node_modules/@tamagui/card/dist/cjs/Card.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Card_exports = {};
    __export2(Card_exports, {
      Card: () => Card,
      CardBackground: () => CardBackground,
      CardFooter: () => CardFooter,
      CardFrame: () => CardFrame,
      CardHeader: () => CardHeader
    });
    module2.exports = __toCommonJS2(Card_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var import_react = __toESM2(require("react"));
    import_react.default["createElement"];
    var CardFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "Card",
      backgroundColor: "$background",
      position: "relative",
      overflow: "hidden",
      variants: {
        size: {
          "...size": (val, { tokens: tokens2 }) => {
            return {
              borderRadius: tokens2.radius[val] ?? val
            };
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var CardHeader = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "CardHeader",
      zIndex: 10,
      backgroundColor: "transparent",
      marginBottom: "auto",
      variants: {
        size: {
          "...size": (val, { tokens: tokens2 }) => {
            return {
              padding: tokens2.space[val] ?? val
            };
          }
        }
      }
    });
    var CardFooter = (0, import_core4.styled)(CardHeader, {
      name: "CardFooter",
      zIndex: 5,
      flexDirection: "row",
      marginTop: "auto",
      marginBottom: 0
    });
    var CardBackground = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "CardBackground",
      zIndex: 0,
      fullscreen: true,
      overflow: "hidden",
      pointerEvents: "none",
      padding: 0
    });
    var Card = (0, import_core4.withStaticProperties)(
      CardFrame.extractable(
        (0, import_core4.themeable)(
          (0, import_react.forwardRef)(
            ({ size: size2, __scopeCard, children, ...props }, ref) => {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFrame, {
                ref,
                ...props,
                children: import_react.default.Children.map(children, (child) => {
                  if ((0, import_core4.isTamaguiElement)(child) && !child.props.size) {
                    return (0, import_react.cloneElement)(child, {
                      size: size2
                    });
                  }
                  return child;
                })
              });
            }
          )
        )
      ),
      {
        Header: CardHeader,
        Footer: CardFooter,
        Background: CardBackground
      }
    );
  }
});

// ../../node_modules/@tamagui/card/dist/cjs/index.js
var require_cjs25 = __commonJS({
  "../../node_modules/@tamagui/card/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Card(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var registerFocusable_exports = {};
    __export2(registerFocusable_exports, {
      focusFocusable: () => focusFocusable,
      registerFocusable: () => registerFocusable,
      unregisterFocusable: () => unregisterFocusable
    });
    module2.exports = __toCommonJS2(registerFocusable_exports);
    var registerFocusable = /* @__PURE__ */ __name((id, input) => {
    }, "registerFocusable");
    var unregisterFocusable = /* @__PURE__ */ __name((id) => {
    }, "unregisterFocusable");
    var focusFocusable = /* @__PURE__ */ __name((id) => {
    }, "focusFocusable");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusableInputHOC_exports = {};
    __export2(focusableInputHOC_exports, {
      focusableInputHOC: () => focusableInputHOC
    });
    module2.exports = __toCommonJS2(focusableInputHOC_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_react2 = require("react");
    var import_registerFocusable = require_registerFocusable();
    function focusableInputHOC(Component2) {
      return (0, import_react2.forwardRef)(
        (props, ref) => {
          const isInput = (0, import_core4.isTamaguiComponent)(Component2) && Component2.staticConfig.isInput;
          const inputValue = (0, import_react.useRef)(props.value || props.defaultValue || "");
          const inputRef = (0, import_react2.useCallback)(
            (input) => {
              if (!props.id)
                return;
              if (!input)
                return;
              (0, import_registerFocusable.registerFocusable)(props.id, {
                focus: input.focus,
                ...isInput && {
                  focusAndSelect() {
                    input.focus();
                    if (input.setSelection && typeof inputValue.current === "string") {
                      input.setSelection(0, inputValue.current.length);
                    }
                  }
                }
              });
            },
            [props.id]
          );
          const combinedRefs = (0, import_compose_refs.composeRefs)(ref, inputRef);
          (0, import_react2.useEffect)(() => {
            if (!props.id)
              return;
            return () => {
              (0, import_registerFocusable.unregisterFocusable)(props.id);
            };
          }, [props.id]);
          const finalProps = isInput ? {
            ...props,
            onChangeText(value) {
              var _a;
              inputValue.current = value;
              (_a = props.onChangeText) == null ? void 0 : _a.call(props, value);
            }
          } : props;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component2, {
            ref: combinedRefs,
            ...finalProps
          });
        }
      );
    }
    __name(focusableInputHOC, "focusableInputHOC");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusable_exports = {};
    module2.exports = __toCommonJS2(focusable_exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs26 = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_registerFocusable(), module2.exports);
    __reExport2(src_exports, require_focusableInputHOC(), module2.exports);
    __reExport2(src_exports, require_focusable(), module2.exports);
  }
});

// ../../node_modules/@tamagui/label/dist/cjs/Label.js
var require_Label = __commonJS({
  "../../node_modules/@tamagui/label/dist/cjs/Label.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Label_exports = {};
    __export2(Label_exports, {
      Label: () => Label,
      LabelFrame: () => LabelFrame,
      useLabelContext: () => useLabelContext
    });
    module2.exports = __toCommonJS2(Label_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_focusable = require_cjs26();
    var import_text = require_cjs14();
    var React3 = __toESM2(require("react"));
    var NAME = "Label";
    var [LabelProvider, useLabelContextImpl] = (0, import_create_context.createContext)(NAME, {
      id: void 0,
      controlRef: { current: null }
    });
    var LabelFrame = (0, import_core4.styled)(import_text.SizableText, {
      name: "Label",
      tag: "label",
      size: "$4",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      selectable: false,
      cursor: "default",
      pressStyle: {
        color: "$colorPress"
      },
      variants: {
        size: {
          "...size": (val, extras) => {
            const buttonStyle = (0, import_core4.getButtonSize)(val, extras);
            return {
              ...(0, import_core4.getFont)(val, extras),
              height: buttonStyle.height,
              lineHeight: buttonStyle.height
            };
          }
        }
      }
    });
    var LabelComponent = React3.forwardRef((props, forwardedRef) => {
      const { htmlFor, id: idProp, ...labelProps } = props;
      const controlRef = React3.useRef(null);
      const ref = React3.useRef(null);
      const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
      const backupId = (0, import_core4.useId)();
      const id = idProp ?? backupId;
      if (import_core4.isWeb) {
        React3.useEffect(() => {
          if (htmlFor) {
            const element = document.getElementById(htmlFor);
            const label = ref.current;
            if (label && element) {
              const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
              const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
              element.setAttribute("aria-labelledby", ariaLabelledBy);
              controlRef.current = element;
              return () => {
                var _a;
                if (!id)
                  return;
                const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
                if (ariaLabelledBy2 === "") {
                  element.removeAttribute("aria-labelledby");
                } else if (ariaLabelledBy2) {
                  element.setAttribute("aria-labelledby", ariaLabelledBy2);
                }
              };
            }
          }
        }, [id, htmlFor]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelProvider, {
        id,
        controlRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelFrame, {
          role: "label",
          id,
          ...labelProps,
          ref: composedRefs,
          onMouseDown: (event) => {
            var _a;
            (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented && event.detail > 1) {
              event.preventDefault();
            }
          },
          onPress: (event) => {
            var _a;
            (_a = props.onPress) == null ? void 0 : _a.call(props, event);
            if (import_core4.isWeb) {
              if (!controlRef.current || event.defaultPrevented)
                return;
              const isClickingControl = controlRef.current.contains(event.target);
              const isUserClick = event.isTrusted === true;
              if (!isClickingControl && isUserClick) {
                controlRef.current.click();
                controlRef.current.focus();
              }
            } else {
              if (props.htmlFor) {
                (0, import_focusable.focusFocusable)(props.htmlFor);
              }
            }
          }
        })
      });
    });
    LabelComponent.displayName = NAME;
    var Label = LabelFrame.extractable((0, import_core4.themeable)(LabelComponent), {
      neverFlatten: true
    });
    var useLabelContext = /* @__PURE__ */ __name((element) => {
      const context = useLabelContextImpl("LabelConsumer");
      const { controlRef } = context;
      React3.useEffect(() => {
        if (element)
          controlRef.current = element;
      }, [element, controlRef]);
      return context.id;
    }, "useLabelContext");
  }
});

// ../../node_modules/@tamagui/label/dist/cjs/index.js
var require_cjs27 = __commonJS({
  "../../node_modules/@tamagui/label/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Label(), module2.exports);
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ListItem_exports = {};
    __export2(ListItem_exports, {
      ListItem: () => ListItem,
      ListItemFrame: () => ListItemFrame,
      ListItemSubtitle: () => ListItemSubtitle,
      ListItemText: () => ListItemText,
      ListItemTitle: () => ListItemTitle,
      listItemStaticConfig: () => listItemStaticConfig,
      useListItem: () => useListItem
    });
    module2.exports = __toCommonJS2(ListItem_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_font_size = require_cjs20();
    var import_helpers_tamagui = require_cjs23();
    var import_stacks = require_cjs8();
    var import_text = require_cjs14();
    var import_react = __toESM2(require("react"));
    import_react.default["createElement"];
    var ListItemFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "ListItem",
      tag: "li",
      alignItems: "center",
      flexWrap: "nowrap",
      width: "100%",
      borderColor: "$borderColor",
      maxWidth: "100%",
      overflow: "hidden",
      flexDirection: "row",
      variants: {
        size: {
          "...size": (val, { tokens: tokens2 }) => {
            return {
              minHeight: tokens2.size[val],
              paddingHorizontal: tokens2.space[val],
              paddingVertical: (0, import_helpers_tamagui.getSpace)(val, -2)
            };
          }
        },
        active: {
          true: {
            hoverStyle: {
              backgroundColor: "$background"
            }
          }
        },
        disabled: {
          true: {
            opacity: 0.5,
            pointerEvents: "none"
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var ListItemText = (0, import_core4.styled)(import_text.SizableText, {
      name: "ListItemText",
      color: "$color",
      userSelect: "none",
      flexGrow: 1,
      flexShrink: 1,
      ellipse: true,
      cursor: "default"
    });
    var ListItemSubtitle = (0, import_core4.styled)(ListItemText, {
      name: "ListItemSubtitle",
      color: "$colorPress",
      marginTop: "$-2",
      opacity: 0.65,
      maxWidth: "100%",
      size: "$3"
    });
    var ListItemTitle = (0, import_core4.styled)(ListItemText, {
      name: "ListItemTitle"
    });
    var useListItem = /* @__PURE__ */ __name((props, {
      Text: Text2 = ListItemText,
      Subtitle = ListItemSubtitle,
      Title = ListItemTitle
    } = { Text: ListItemText, Subtitle: ListItemSubtitle, Title: ListItemTitle }) => {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space: space2,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 1,
        subTitle,
        color: color2,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        title,
        ...rest
      } = props;
      const mediaActiveProps = (0, import_core4.useMediaPropsActive)(props);
      const size2 = mediaActiveProps.size || "$4";
      const subtitleSizeToken = (0, import_core4.getSize)(size2, -3);
      const subtitleSize = `$${subtitleSizeToken.key}`;
      const iconSize = (0, import_font_size.getFontSize)(size2) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color: color2 });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core4.getVariableValue)(iconSize) * scaleSpace;
      const contents = (0, import_text.wrapChildrenInText)(Text2, mediaActiveProps);
      return {
        props: {
          fontFamily,
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [
              themedIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                children: [
                  themedIcon,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Spacer, {
                    size: spaceSize
                  })
                ]
              }) : null,
              Boolean(title || subTitle) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_stacks.YStack, {
                flex: 1,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
                    size: size2,
                    children: title
                  }),
                  subTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Spacer, {
                        flex: true,
                        size: spaceSize * 0.333
                      }),
                      typeof subTitle === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subtitle, {
                        size: subtitleSize,
                        children: subTitle
                      }) : subTitle
                    ]
                  }) : null,
                  contents
                ]
              }) : contents,
              themedIconAfter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Spacer, {
                    flex: true,
                    size: spaceSize
                  }),
                  themedIconAfter
                ]
              }) : null
            ]
          })
        }
      };
    }, "useListItem");
    var ListItemComponent = (0, import_react.forwardRef)((props, ref) => {
      const { props: listItemProps } = useListItem(props);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItemFrame, {
        ref,
        ...listItemProps
      });
    });
    var listItemStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var ListItem = (0, import_core4.withStaticProperties)(
      ListItemFrame.extractable((0, import_core4.themeable)(ListItemComponent), listItemStaticConfig),
      {
        Text: ListItemText,
        Subtitle: ListItemSubtitle
      }
    );
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs28 = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ListItem(), module2.exports);
  }
});

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.umd.js
var require_floating_ui_core_umd = __commonJS({
  "../../node_modules/@floating-ui/core/dist/floating-ui.core.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUICore = {}));
    })(exports, function(exports2) {
      "use strict";
      function getSide(placement) {
        return placement.split("-")[0];
      }
      __name(getSide, "getSide");
      function getAlignment(placement) {
        return placement.split("-")[1];
      }
      __name(getAlignment, "getAlignment");
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
      }
      __name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
      function getLengthFromAxis(axis) {
        return axis === "y" ? "height" : "width";
      }
      __name(getLengthFromAxis, "getLengthFromAxis");
      function computeCoordsFromPlacement(_ref, placement, rtl) {
        let {
          reference,
          floating
        } = _ref;
        const commonX = reference.x + reference.width / 2 - floating.width / 2;
        const commonY = reference.y + reference.height / 2 - floating.height / 2;
        const mainAxis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(mainAxis);
        const commonAlign = reference[length] / 2 - floating[length] / 2;
        const side = getSide(placement);
        const isVertical = mainAxis === "x";
        let coords;
        switch (side) {
          case "top":
            coords = {
              x: commonX,
              y: reference.y - floating.height
            };
            break;
          case "bottom":
            coords = {
              x: commonX,
              y: reference.y + reference.height
            };
            break;
          case "right":
            coords = {
              x: reference.x + reference.width,
              y: commonY
            };
            break;
          case "left":
            coords = {
              x: reference.x - floating.width,
              y: commonY
            };
            break;
          default:
            coords = {
              x: reference.x,
              y: reference.y
            };
        }
        switch (getAlignment(placement)) {
          case "start":
            coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
          case "end":
            coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        }
        return coords;
      }
      __name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
      const computePosition = /* @__PURE__ */ __name(async (reference, floating, config2) => {
        const {
          placement = "bottom",
          strategy = "absolute",
          middleware = [],
          platform
        } = config2;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
        {
          if (platform == null) {
            console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
          }
          if (middleware.filter((_ref) => {
            let {
              name
            } = _ref;
            return name === "autoPlacement" || name === "flip";
          }).length > 1) {
            throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
          }
        }
        let rects = await platform.getElementRects({
          reference,
          floating,
          strategy
        });
        let {
          x,
          y
        } = computeCoordsFromPlacement(rects, placement, rtl);
        let statefulPlacement = placement;
        let middlewareData = {};
        let resetCount = 0;
        for (let i = 0; i < middleware.length; i++) {
          const {
            name,
            fn
          } = middleware[i];
          const {
            x: nextX,
            y: nextY,
            data,
            reset
          } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
              reference,
              floating
            }
          });
          x = nextX != null ? nextX : x;
          y = nextY != null ? nextY : y;
          middlewareData = {
            ...middlewareData,
            [name]: {
              ...middlewareData[name],
              ...data
            }
          };
          {
            if (resetCount > 50) {
              console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
            }
          }
          if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === "object") {
              if (reset.placement) {
                statefulPlacement = reset.placement;
              }
              if (reset.rects) {
                rects = reset.rects === true ? await platform.getElementRects({
                  reference,
                  floating,
                  strategy
                }) : reset.rects;
              }
              ({
                x,
                y
              } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
            continue;
          }
        }
        return {
          x,
          y,
          placement: statefulPlacement,
          strategy,
          middlewareData
        };
      }, "computePosition");
      function expandPaddingObject(padding) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...padding
        };
      }
      __name(expandPaddingObject, "expandPaddingObject");
      function getSideObjectFromPadding(padding) {
        return typeof padding !== "number" ? expandPaddingObject(padding) : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        };
      }
      __name(getSideObjectFromPadding, "getSideObjectFromPadding");
      function rectToClientRect(rect) {
        return {
          ...rect,
          top: rect.y,
          left: rect.x,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        };
      }
      __name(rectToClientRect, "rectToClientRect");
      async function detectOverflow(middlewareArguments, options) {
        var _await$platform$isEle;
        if (options === void 0) {
          options = {};
        }
        const {
          x,
          y,
          platform,
          rects,
          elements,
          strategy
        } = middlewareArguments;
        const {
          boundary = "clippingAncestors",
          rootBoundary = "viewport",
          elementContext = "floating",
          altBoundary = false,
          padding = 0
        } = options;
        const paddingObject = getSideObjectFromPadding(padding);
        const altContext = elementContext === "floating" ? "reference" : "floating";
        const element = elements[altBoundary ? altContext : elementContext];
        const clippingClientRect = rectToClientRect(await platform.getClippingRect({
          element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
          boundary,
          rootBoundary,
          strategy
        }));
        const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: elementContext === "floating" ? {
            ...rects.floating,
            x,
            y
          } : rects.reference,
          offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
          strategy
        }) : rects[elementContext]);
        return {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
      }
      __name(detectOverflow, "detectOverflow");
      const min = Math.min;
      const max = Math.max;
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      __name(within, "within");
      const arrow = /* @__PURE__ */ __name((options) => ({
        name: "arrow",
        options,
        async fn(middlewareArguments) {
          const {
            element,
            padding = 0
          } = options != null ? options : {};
          const {
            x,
            y,
            placement,
            rects,
            platform
          } = middlewareArguments;
          if (element == null) {
            {
              console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
            }
            return {};
          }
          const paddingObject = getSideObjectFromPadding(padding);
          const coords = {
            x,
            y
          };
          const axis = getMainAxisFromPlacement(placement);
          const alignment = getAlignment(placement);
          const length = getLengthFromAxis(axis);
          const arrowDimensions = await platform.getDimensions(element);
          const minProp = axis === "y" ? "top" : "left";
          const maxProp = axis === "y" ? "bottom" : "right";
          const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
          const startDiff = coords[axis] - rects.reference[axis];
          const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
          let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          if (clientSize === 0) {
            clientSize = rects.floating[length];
          }
          const centerToReference = endDiff / 2 - startDiff / 2;
          const min2 = paddingObject[minProp];
          const max2 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
          const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
          const offset2 = within(min2, center, max2);
          const alignmentPadding = alignment === "start" ? paddingObject[minProp] : paddingObject[maxProp];
          const shouldAddOffset = alignmentPadding > 0 && center !== offset2 && rects.reference[length] <= rects.floating[length];
          const alignmentOffset = shouldAddOffset ? center < min2 ? min2 - center : max2 - center : 0;
          return {
            [axis]: coords[axis] - alignmentOffset,
            data: {
              [axis]: offset2,
              centerOffset: center - offset2
            }
          };
        }
      }), "arrow");
      const hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
      }
      __name(getOppositePlacement, "getOppositePlacement");
      function getAlignmentSides(placement, rects, rtl) {
        if (rtl === void 0) {
          rtl = false;
        }
        const alignment = getAlignment(placement);
        const mainAxis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(mainAxis);
        let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
        if (rects.reference[length] > rects.floating[length]) {
          mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
        }
        return {
          main: mainAlignmentSide,
          cross: getOppositePlacement(mainAlignmentSide)
        };
      }
      __name(getAlignmentSides, "getAlignmentSides");
      const hash = {
        start: "end",
        end: "start"
      };
      function getOppositeAlignmentPlacement(placement) {
        return placement.replace(/start|end/g, (matched) => hash[matched]);
      }
      __name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
      const sides = ["top", "right", "bottom", "left"];
      const allPlacements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
      function getPlacementList(alignment, autoAlignment, allowedPlacements) {
        const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
        return allowedPlacementsSortedByAlignment.filter((placement) => {
          if (alignment) {
            return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
          }
          return true;
        });
      }
      __name(getPlacementList, "getPlacementList");
      const autoPlacement = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "autoPlacement",
          options,
          async fn(middlewareArguments) {
            var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;
            const {
              x,
              y,
              rects,
              middlewareData,
              placement,
              platform,
              elements
            } = middlewareArguments;
            const {
              alignment = null,
              allowedPlacements = allPlacements,
              autoAlignment = true,
              ...detectOverflowOptions
            } = options;
            const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
            const currentPlacement = placements[currentIndex];
            if (currentPlacement == null) {
              return {};
            }
            const {
              main,
              cross
            } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            if (placement !== currentPlacement) {
              return {
                x,
                y,
                reset: {
                  placement: placements[0]
                }
              };
            }
            const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
            const allOverflows = [...(_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : [], {
              placement: currentPlacement,
              overflows: currentOverflows
            }];
            const nextPlacement = placements[currentIndex + 1];
            if (nextPlacement) {
              return {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
            const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref) => {
              let {
                overflows
              } = _ref;
              return overflows.every((overflow2) => overflow2 <= 0);
            })) == null ? void 0 : _placementsSortedByLe.placement;
            const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;
            if (resetPlacement !== placement) {
              return {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: resetPlacement
                }
              };
            }
            return {};
          }
        };
      }, "autoPlacement");
      function getExpandedPlacements(placement) {
        const oppositePlacement = getOppositePlacement(placement);
        return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
      }
      __name(getExpandedPlacements, "getExpandedPlacements");
      const flip = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "flip",
          options,
          async fn(middlewareArguments) {
            var _middlewareData$flip;
            const {
              placement,
              middlewareData,
              rects,
              initialPlacement,
              platform,
              elements
            } = middlewareArguments;
            const {
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = true,
              fallbackPlacements: specifiedFallbackPlacements,
              fallbackStrategy = "bestFit",
              flipAlignment = true,
              ...detectOverflowOptions
            } = options;
            const side = getSide(placement);
            const isBasePlacement = side === initialPlacement;
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
            const placements = [initialPlacement, ...fallbackPlacements];
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
              overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
              const {
                main,
                cross
              } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
              overflows.push(overflow[main], overflow[cross]);
            }
            overflowsData = [...overflowsData, {
              placement,
              overflows
            }];
            if (!overflows.every((side2) => side2 <= 0)) {
              var _middlewareData$flip$, _middlewareData$flip2;
              const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
              const nextPlacement = placements[nextIndex];
              if (nextPlacement) {
                return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
              let resetPlacement = "bottom";
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$map$so;
                  const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
              if (placement !== resetPlacement) {
                return {
                  reset: {
                    placement: resetPlacement
                  }
                };
              }
            }
            return {};
          }
        };
      }, "flip");
      function getSideOffsets(overflow, rect) {
        return {
          top: overflow.top - rect.height,
          right: overflow.right - rect.width,
          bottom: overflow.bottom - rect.height,
          left: overflow.left - rect.width
        };
      }
      __name(getSideOffsets, "getSideOffsets");
      function isAnySideFullyClipped(overflow) {
        return sides.some((side) => overflow[side] >= 0);
      }
      __name(isAnySideFullyClipped, "isAnySideFullyClipped");
      const hide = /* @__PURE__ */ __name(function(_temp) {
        let {
          strategy = "referenceHidden",
          ...detectOverflowOptions
        } = _temp === void 0 ? {} : _temp;
        return {
          name: "hide",
          async fn(middlewareArguments) {
            const {
              rects
            } = middlewareArguments;
            switch (strategy) {
              case "referenceHidden": {
                const overflow = await detectOverflow(middlewareArguments, {
                  ...detectOverflowOptions,
                  elementContext: "reference"
                });
                const offsets = getSideOffsets(overflow, rects.reference);
                return {
                  data: {
                    referenceHiddenOffsets: offsets,
                    referenceHidden: isAnySideFullyClipped(offsets)
                  }
                };
              }
              case "escaped": {
                const overflow = await detectOverflow(middlewareArguments, {
                  ...detectOverflowOptions,
                  altBoundary: true
                });
                const offsets = getSideOffsets(overflow, rects.floating);
                return {
                  data: {
                    escapedOffsets: offsets,
                    escaped: isAnySideFullyClipped(offsets)
                  }
                };
              }
              default: {
                return {};
              }
            }
          }
        };
      }, "hide");
      async function convertValueToCoords(middlewareArguments, value) {
        const {
          placement,
          platform,
          elements
        } = middlewareArguments;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isVertical = getMainAxisFromPlacement(placement) === "x";
        const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
        const crossAxisMulti = rtl && isVertical ? -1 : 1;
        const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
        let {
          mainAxis,
          crossAxis,
          alignmentAxis
        } = typeof rawValue === "number" ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: 0,
          crossAxis: 0,
          alignmentAxis: null,
          ...rawValue
        };
        if (alignment && typeof alignmentAxis === "number") {
          crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
        }
        return isVertical ? {
          x: crossAxis * crossAxisMulti,
          y: mainAxis * mainAxisMulti
        } : {
          x: mainAxis * mainAxisMulti,
          y: crossAxis * crossAxisMulti
        };
      }
      __name(convertValueToCoords, "convertValueToCoords");
      const offset = /* @__PURE__ */ __name(function(value) {
        if (value === void 0) {
          value = 0;
        }
        return {
          name: "offset",
          options: value,
          async fn(middlewareArguments) {
            const {
              x,
              y
            } = middlewareArguments;
            const diffCoords = await convertValueToCoords(middlewareArguments, value);
            return {
              x: x + diffCoords.x,
              y: y + diffCoords.y,
              data: diffCoords
            };
          }
        };
      }, "offset");
      function getCrossAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      __name(getCrossAxis, "getCrossAxis");
      const shift = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "shift",
          options,
          async fn(middlewareArguments) {
            const {
              x,
              y,
              placement
            } = middlewareArguments;
            const {
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = false,
              limiter = {
                fn: (_ref) => {
                  let {
                    x: x2,
                    y: y2
                  } = _ref;
                  return {
                    x: x2,
                    y: y2
                  };
                }
              },
              ...detectOverflowOptions
            } = options;
            const coords = {
              x,
              y
            };
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const mainAxis = getMainAxisFromPlacement(getSide(placement));
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
              const minSide = mainAxis === "y" ? "top" : "left";
              const maxSide = mainAxis === "y" ? "bottom" : "right";
              const min2 = mainAxisCoord + overflow[minSide];
              const max2 = mainAxisCoord - overflow[maxSide];
              mainAxisCoord = within(min2, mainAxisCoord, max2);
            }
            if (checkCrossAxis) {
              const minSide = crossAxis === "y" ? "top" : "left";
              const maxSide = crossAxis === "y" ? "bottom" : "right";
              const min2 = crossAxisCoord + overflow[minSide];
              const max2 = crossAxisCoord - overflow[maxSide];
              crossAxisCoord = within(min2, crossAxisCoord, max2);
            }
            const limitedCoords = limiter.fn({
              ...middlewareArguments,
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            });
            return {
              ...limitedCoords,
              data: {
                x: limitedCoords.x - x,
                y: limitedCoords.y - y
              }
            };
          }
        };
      }, "shift");
      const limitShift = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          options,
          fn(middlewareArguments) {
            const {
              x,
              y,
              placement,
              rects,
              middlewareData
            } = middlewareArguments;
            const {
              offset: offset2 = 0,
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = true
            } = options;
            const coords = {
              x,
              y
            };
            const mainAxis = getMainAxisFromPlacement(placement);
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = typeof offset2 === "function" ? offset2(middlewareArguments) : offset2;
            const computedOffset = typeof rawOffset === "number" ? {
              mainAxis: rawOffset,
              crossAxis: 0
            } : {
              mainAxis: 0,
              crossAxis: 0,
              ...rawOffset
            };
            if (checkMainAxis) {
              const len = mainAxis === "y" ? "height" : "width";
              const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
              const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
              if (mainAxisCoord < limitMin) {
                mainAxisCoord = limitMin;
              } else if (mainAxisCoord > limitMax) {
                mainAxisCoord = limitMax;
              }
            }
            if (checkCrossAxis) {
              var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;
              const len = mainAxis === "y" ? "width" : "height";
              const isOriginSide = ["top", "left"].includes(getSide(placement));
              const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
              const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);
              if (crossAxisCoord < limitMin) {
                crossAxisCoord = limitMin;
              } else if (crossAxisCoord > limitMax) {
                crossAxisCoord = limitMax;
              }
            }
            return {
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            };
          }
        };
      }, "limitShift");
      const size2 = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "size",
          options,
          async fn(middlewareArguments) {
            const {
              placement,
              rects,
              platform,
              elements
            } = middlewareArguments;
            const {
              apply = /* @__PURE__ */ __name(() => {
              }, "apply"),
              ...detectOverflowOptions
            } = options;
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const side = getSide(placement);
            const alignment = getAlignment(placement);
            let heightSide;
            let widthSide;
            if (side === "top" || side === "bottom") {
              heightSide = side;
              widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
            } else {
              widthSide = side;
              heightSide = alignment === "end" ? "top" : "bottom";
            }
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            const dimensions = {
              availableHeight: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
              availableWidth: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
            };
            await apply({
              ...middlewareArguments,
              ...dimensions
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (rects.floating.width !== nextDimensions.width || rects.floating.height !== nextDimensions.height) {
              return {
                reset: {
                  rects: true
                }
              };
            }
            return {};
          }
        };
      }, "size");
      const inline = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "inline",
          options,
          async fn(middlewareArguments) {
            var _await$platform$getCl;
            const {
              placement,
              elements,
              rects,
              platform,
              strategy
            } = middlewareArguments;
            const {
              padding = 2,
              x,
              y
            } = options;
            const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
              rect: rects.reference,
              offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
              strategy
            }) : rects.reference);
            const clientRects = (_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) != null ? _await$platform$getCl : [];
            const paddingObject = getSideObjectFromPadding(padding);
            function getBoundingClientRect() {
              if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                var _clientRects$find;
                return (_clientRects$find = clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
              }
              if (clientRects.length >= 2) {
                if (getMainAxisFromPlacement(placement) === "x") {
                  const firstRect = clientRects[0];
                  const lastRect = clientRects[clientRects.length - 1];
                  const isTop = getSide(placement) === "top";
                  const top2 = firstRect.top;
                  const bottom2 = lastRect.bottom;
                  const left2 = isTop ? firstRect.left : lastRect.left;
                  const right2 = isTop ? firstRect.right : lastRect.right;
                  const width2 = right2 - left2;
                  const height2 = bottom2 - top2;
                  return {
                    top: top2,
                    bottom: bottom2,
                    left: left2,
                    right: right2,
                    width: width2,
                    height: height2,
                    x: left2,
                    y: top2
                  };
                }
                const isLeftSide = getSide(placement) === "left";
                const maxRight = max(...clientRects.map((rect) => rect.right));
                const minLeft = min(...clientRects.map((rect) => rect.left));
                const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                const top = measureRects[0].top;
                const bottom = measureRects[measureRects.length - 1].bottom;
                const left = minLeft;
                const right = maxRight;
                const width = right - left;
                const height = bottom - top;
                return {
                  top,
                  bottom,
                  left,
                  right,
                  width,
                  height,
                  x: left,
                  y: top
                };
              }
              return fallback;
            }
            __name(getBoundingClientRect, "getBoundingClientRect");
            const resetRects = await platform.getElementRects({
              reference: {
                getBoundingClientRect
              },
              floating: elements.floating,
              strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
              return {
                reset: {
                  rects: resetRects
                }
              };
            }
            return {};
          }
        };
      }, "inline");
      exports2.arrow = arrow;
      exports2.autoPlacement = autoPlacement;
      exports2.computePosition = computePosition;
      exports2.detectOverflow = detectOverflow;
      exports2.flip = flip;
      exports2.hide = hide;
      exports2.inline = inline;
      exports2.limitShift = limitShift;
      exports2.offset = offset;
      exports2.rectToClientRect = rectToClientRect;
      exports2.shift = shift;
      exports2.size = size2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js
var require_floating_ui_dom_umd = __commonJS({
  "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_floating_ui_core_umd()) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/core"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIDOM = {}, global2.FloatingUICore));
    })(exports, function(exports2, core) {
      "use strict";
      function isWindow(value) {
        return value && value.document && value.location && value.alert && value.setInterval;
      }
      __name(isWindow, "isWindow");
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (!isWindow(node)) {
          const ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      __name(getWindow, "getWindow");
      function getComputedStyle$1(element) {
        return getWindow(element).getComputedStyle(element);
      }
      __name(getComputedStyle$1, "getComputedStyle$1");
      function getNodeName(node) {
        return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
      }
      __name(getNodeName, "getNodeName");
      function getUAString() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands) {
          return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
        }
        return navigator.userAgent;
      }
      __name(getUAString, "getUAString");
      function isHTMLElement(value) {
        return value instanceof getWindow(value).HTMLElement;
      }
      __name(isHTMLElement, "isHTMLElement");
      function isElement(value) {
        return value instanceof getWindow(value).Element;
      }
      __name(isElement, "isElement");
      function isNode(value) {
        return value instanceof getWindow(value).Node;
      }
      __name(isNode, "isNode");
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        const OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      __name(isShadowRoot, "isShadowRoot");
      function isOverflowElement(element) {
        const {
          overflow,
          overflowX,
          overflowY
        } = getComputedStyle$1(element);
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      __name(isOverflowElement, "isOverflowElement");
      function isTableElement(element) {
        return ["table", "td", "th"].includes(getNodeName(element));
      }
      __name(isTableElement, "isTableElement");
      function isContainingBlock(element) {
        const isFirefox = /firefox/i.test(getUAString());
        const css = getComputedStyle$1(element);
        return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
      }
      __name(isContainingBlock, "isContainingBlock");
      function isLayoutViewport() {
        return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      __name(isLayoutViewport, "isLayoutViewport");
      const min = Math.min;
      const max = Math.max;
      const round = Math.round;
      function getBoundingClientRect(element, includeScale, isFixedStrategy) {
        var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
        if (includeScale === void 0) {
          includeScale = false;
        }
        if (isFixedStrategy === void 0) {
          isFixedStrategy = false;
        }
        const clientRect = element.getBoundingClientRect();
        let scaleX = 1;
        let scaleY = 1;
        if (includeScale && isHTMLElement(element)) {
          scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
          scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
        }
        const win = isElement(element) ? getWindow(element) : window;
        const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
        const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
        const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
        const width = clientRect.width / scaleX;
        const height = clientRect.height / scaleY;
        return {
          width,
          height,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x,
          x,
          y
        };
      }
      __name(getBoundingClientRect, "getBoundingClientRect");
      function getDocumentElement(node) {
        return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
      }
      __name(getDocumentElement, "getDocumentElement");
      function getNodeScroll(element) {
        if (isElement(element)) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        return {
          scrollLeft: element.pageXOffset,
          scrollTop: element.pageYOffset
        };
      }
      __name(getNodeScroll, "getNodeScroll");
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
      }
      __name(getWindowScrollBarX, "getWindowScrollBarX");
      function isScaled(element) {
        const rect = getBoundingClientRect(element);
        return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
      }
      __name(isScaled, "isScaled");
      function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        const rect = getBoundingClientRect(
          element,
          isOffsetParentAnElement && isScaled(offsetParent),
          strategy === "fixed"
        );
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      __name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
      function getParentNode(node) {
        if (getNodeName(node) === "html") {
          return node;
        }
        return node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
      }
      __name(getParentNode, "getParentNode");
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      __name(getTrueOffsetParent, "getTrueOffsetParent");
      function getContainingBlock(element) {
        let currentNode = getParentNode(element);
        if (isShadowRoot(currentNode)) {
          currentNode = currentNode.host;
        }
        while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
          if (isContainingBlock(currentNode)) {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      __name(getContainingBlock, "getContainingBlock");
      function getOffsetParent(element) {
        const window2 = getWindow(element);
        let offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      __name(getOffsetParent, "getOffsetParent");
      function getDimensions(element) {
        if (isHTMLElement(element)) {
          return {
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }
        const rect = getBoundingClientRect(element);
        return {
          width: rect.width,
          height: rect.height
        };
      }
      __name(getDimensions, "getDimensions");
      function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
        let {
          rect,
          offsetParent,
          strategy
        } = _ref;
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        if (offsetParent === documentElement) {
          return rect;
        }
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          }
        }
        return {
          ...rect,
          x: rect.x - scroll.scrollLeft + offsets.x,
          y: rect.y - scroll.scrollTop + offsets.y
        };
      }
      __name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
      function getViewportRect(element, strategy) {
        const win = getWindow(element);
        const html = getDocumentElement(element);
        const visualViewport = win.visualViewport;
        let width = html.clientWidth;
        let height = html.clientHeight;
        let x = 0;
        let y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          const layoutViewport = isLayoutViewport();
          if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      __name(getViewportRect, "getViewportRect");
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        const html = getDocumentElement(element);
        const scroll = getNodeScroll(element);
        const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        let x = -scroll.scrollLeft + getWindowScrollBarX(element);
        const y = -scroll.scrollTop;
        if (getComputedStyle$1(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      __name(getDocumentRect, "getDocumentRect");
      function getNearestOverflowAncestor(node) {
        const parentNode = getParentNode(node);
        if (["html", "body", "#document"].includes(getNodeName(parentNode))) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
          return parentNode;
        }
        return getNearestOverflowAncestor(parentNode);
      }
      __name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
      function getOverflowAncestors(node, list) {
        var _node$ownerDocument;
        if (list === void 0) {
          list = [];
        }
        const scrollableAncestor = getNearestOverflowAncestor(node);
        const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
        const win = getWindow(scrollableAncestor);
        const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
        const updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat(getOverflowAncestors(target));
      }
      __name(getOverflowAncestors, "getOverflowAncestors");
      function contains(parent, child) {
        const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          let next = child;
          do {
            if (next && parent === next) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      __name(contains, "contains");
      function getInnerBoundingClientRect(element, strategy) {
        const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
        const top = clientRect.top + element.clientTop;
        const left = clientRect.left + element.clientLeft;
        return {
          top,
          left,
          x: left,
          y: top,
          right: left + element.clientWidth,
          bottom: top + element.clientHeight,
          width: element.clientWidth,
          height: element.clientHeight
        };
      }
      __name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
      function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
        if (clippingParent === "viewport") {
          return core.rectToClientRect(getViewportRect(element, strategy));
        }
        if (isElement(clippingParent)) {
          return getInnerBoundingClientRect(clippingParent, strategy);
        }
        return core.rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      __name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
      function getClippingAncestors(element) {
        const clippingAncestors = getOverflowAncestors(element);
        const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
        const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement(clipperElement)) {
          return [];
        }
        return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
      }
      __name(getClippingAncestors, "getClippingAncestors");
      function getClippingRect(_ref) {
        let {
          element,
          boundary,
          rootBoundary,
          strategy
        } = _ref;
        const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
        const clippingAncestors = [...mainClippingAncestors, rootBoundary];
        const firstClippingAncestor = clippingAncestors[0];
        const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
          const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
        return {
          width: clippingRect.right - clippingRect.left,
          height: clippingRect.bottom - clippingRect.top,
          x: clippingRect.left,
          y: clippingRect.top
        };
      }
      __name(getClippingRect, "getClippingRect");
      const platform = {
        getClippingRect,
        convertOffsetParentRelativeRectToViewportRelativeRect,
        isElement,
        getDimensions,
        getOffsetParent,
        getDocumentElement,
        getElementRects: (_ref) => {
          let {
            reference,
            floating,
            strategy
          } = _ref;
          return {
            reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
            floating: {
              ...getDimensions(floating),
              x: 0,
              y: 0
            }
          };
        },
        getClientRects: (element) => Array.from(element.getClientRects()),
        isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
      };
      function autoUpdate(reference, floating, update, options) {
        if (options === void 0) {
          options = {};
        }
        const {
          ancestorScroll: _ancestorScroll = true,
          ancestorResize: _ancestorResize = true,
          elementResize = true,
          animationFrame = false
        } = options;
        const ancestorScroll = _ancestorScroll && !animationFrame;
        const ancestorResize = _ancestorResize && !animationFrame;
        const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : [], ...getOverflowAncestors(floating)] : [];
        ancestors.forEach((ancestor) => {
          ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
          });
          ancestorResize && ancestor.addEventListener("resize", update);
        });
        let observer = null;
        if (elementResize) {
          let initialUpdate = true;
          observer = new ResizeObserver(() => {
            if (!initialUpdate) {
              update();
            }
            initialUpdate = false;
          });
          isElement(reference) && !animationFrame && observer.observe(reference);
          observer.observe(floating);
        }
        let frameId;
        let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
        if (animationFrame) {
          frameLoop();
        }
        function frameLoop() {
          const nextRefRect = getBoundingClientRect(reference);
          if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
            update();
          }
          prevRefRect = nextRefRect;
          frameId = requestAnimationFrame(frameLoop);
        }
        __name(frameLoop, "frameLoop");
        update();
        return () => {
          var _observer;
          ancestors.forEach((ancestor) => {
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
          });
          (_observer = observer) == null ? void 0 : _observer.disconnect();
          observer = null;
          if (animationFrame) {
            cancelAnimationFrame(frameId);
          }
        };
      }
      __name(autoUpdate, "autoUpdate");
      const computePosition = /* @__PURE__ */ __name((reference, floating, options) => core.computePosition(reference, floating, {
        platform,
        ...options
      }), "computePosition");
      Object.defineProperty(exports2, "arrow", {
        enumerable: true,
        get: function() {
          return core.arrow;
        }
      });
      Object.defineProperty(exports2, "autoPlacement", {
        enumerable: true,
        get: function() {
          return core.autoPlacement;
        }
      });
      Object.defineProperty(exports2, "detectOverflow", {
        enumerable: true,
        get: function() {
          return core.detectOverflow;
        }
      });
      Object.defineProperty(exports2, "flip", {
        enumerable: true,
        get: function() {
          return core.flip;
        }
      });
      Object.defineProperty(exports2, "hide", {
        enumerable: true,
        get: function() {
          return core.hide;
        }
      });
      Object.defineProperty(exports2, "inline", {
        enumerable: true,
        get: function() {
          return core.inline;
        }
      });
      Object.defineProperty(exports2, "limitShift", {
        enumerable: true,
        get: function() {
          return core.limitShift;
        }
      });
      Object.defineProperty(exports2, "offset", {
        enumerable: true,
        get: function() {
          return core.offset;
        }
      });
      Object.defineProperty(exports2, "shift", {
        enumerable: true,
        get: function() {
          return core.shift;
        }
      });
      Object.defineProperty(exports2, "size", {
        enumerable: true,
        get: function() {
          return core.size;
        }
      });
      exports2.autoUpdate = autoUpdate;
      exports2.computePosition = computePosition;
      exports2.getOverflowAncestors = getOverflowAncestors;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.umd.js
var require_floating_ui_react_dom_umd = __commonJS({
  "../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_floating_ui_dom_umd(), require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/dom", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIReactDOM = {}, global2.FloatingUIDOM, global2.React, global2.ReactDOM));
    })(exports, function(exports2, dom, React3, ReactDOM) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      __name(_interopNamespace, "_interopNamespace");
      var React__namespace = /* @__PURE__ */ _interopNamespace(React3);
      var ReactDOM__namespace = /* @__PURE__ */ _interopNamespace(ReactDOM);
      var index = typeof document !== "undefined" ? React3.useLayoutEffect : React3.useEffect;
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        if (typeof a !== typeof b) {
          return false;
        }
        if (typeof a === "function" && a.toString() === b.toString()) {
          return true;
        }
        let length, i, keys;
        if (a && b && typeof a == "object") {
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
              return false;
            for (i = length; i-- !== 0; ) {
              if (!deepEqual(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) {
            return false;
          }
          for (i = length; i-- !== 0; ) {
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
              return false;
            }
          }
          for (i = length; i-- !== 0; ) {
            const key = keys[i];
            if (key === "_owner" && a.$$typeof) {
              continue;
            }
            if (!deepEqual(a[key], b[key])) {
              return false;
            }
          }
          return true;
        }
        return a !== a && b !== b;
      }
      __name(deepEqual, "deepEqual");
      function useLatestRef(value) {
        const ref = React__namespace.useRef(value);
        index(() => {
          ref.current = value;
        });
        return ref;
      }
      __name(useLatestRef, "useLatestRef");
      function useFloating2(_temp) {
        let {
          middleware,
          placement = "bottom",
          strategy = "absolute",
          whileElementsMounted
        } = _temp === void 0 ? {} : _temp;
        const [data, setData] = React__namespace.useState({
          x: null,
          y: null,
          strategy,
          placement,
          middlewareData: {}
        });
        const [latestMiddleware, setLatestMiddleware] = React__namespace.useState(middleware);
        if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map((_ref) => {
          let {
            name,
            options
          } = _ref;
          return {
            name,
            options
          };
        }), middleware == null ? void 0 : middleware.map((_ref2) => {
          let {
            name,
            options
          } = _ref2;
          return {
            name,
            options
          };
        }))) {
          setLatestMiddleware(middleware);
        }
        const reference = React__namespace.useRef(null);
        const floating = React__namespace.useRef(null);
        const cleanupRef = React__namespace.useRef(null);
        const dataRef = React__namespace.useRef(data);
        const whileElementsMountedRef = useLatestRef(whileElementsMounted);
        const update = React__namespace.useCallback(() => {
          if (!reference.current || !floating.current) {
            return;
          }
          dom.computePosition(reference.current, floating.current, {
            middleware: latestMiddleware,
            placement,
            strategy
          }).then((data2) => {
            if (isMountedRef.current && !deepEqual(dataRef.current, data2)) {
              dataRef.current = data2;
              ReactDOM__namespace.flushSync(() => {
                setData(data2);
              });
            }
          });
        }, [latestMiddleware, placement, strategy]);
        index(() => {
          if (isMountedRef.current) {
            update();
          }
        }, [update]);
        const isMountedRef = React__namespace.useRef(false);
        index(() => {
          isMountedRef.current = true;
          return () => {
            isMountedRef.current = false;
          };
        }, []);
        const runElementMountCallback = React__namespace.useCallback(() => {
          if (typeof cleanupRef.current === "function") {
            cleanupRef.current();
            cleanupRef.current = null;
          }
          if (reference.current && floating.current) {
            if (whileElementsMountedRef.current) {
              const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
              cleanupRef.current = cleanupFn;
            } else {
              update();
            }
          }
        }, [update, whileElementsMountedRef]);
        const setReference = React__namespace.useCallback((node) => {
          reference.current = node;
          runElementMountCallback();
        }, [runElementMountCallback]);
        const setFloating = React__namespace.useCallback((node) => {
          floating.current = node;
          runElementMountCallback();
        }, [runElementMountCallback]);
        const refs = React__namespace.useMemo(() => ({
          reference,
          floating
        }), []);
        return React__namespace.useMemo(() => ({
          ...data,
          update,
          refs,
          reference: setReference,
          floating: setFloating
        }), [data, update, refs, setReference, setFloating]);
      }
      __name(useFloating2, "useFloating");
      const arrow = /* @__PURE__ */ __name((options) => {
        const {
          element,
          padding
        } = options;
        function isRef(value) {
          return Object.prototype.hasOwnProperty.call(value, "current");
        }
        __name(isRef, "isRef");
        return {
          name: "arrow",
          options,
          fn(args) {
            if (isRef(element)) {
              if (element.current != null) {
                return dom.arrow({
                  element: element.current,
                  padding
                }).fn(args);
              }
              return {};
            } else if (element) {
              return dom.arrow({
                element,
                padding
              }).fn(args);
            }
            return {};
          }
        };
      }, "arrow");
      exports2.arrow = arrow;
      exports2.useFloating = useFloating2;
      Object.keys(dom).forEach(function(k) {
        if (k !== "default" && !exports2.hasOwnProperty(k))
          Object.defineProperty(exports2, k, {
            enumerable: true,
            get: function() {
              return dom[k];
            }
          });
      });
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/floating.js
var require_floating = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/floating.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var floating_exports = {};
    module2.exports = __toCommonJS2(floating_exports);
    __reExport2(floating_exports, require_floating_ui_react_dom_umd(), module2.exports);
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/useFloating.js
var require_useFloating = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/useFloating.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useFloating_exports = {};
    __export2(useFloating_exports, {
      FloatingOverrideContext: () => FloatingOverrideContext2,
      useFloating: () => useFloating2
    });
    module2.exports = __toCommonJS2(useFloating_exports);
    var import_react = require("react");
    var Floating = __toESM2(require_floating());
    var FloatingOverrideContext2 = (0, import_react.createContext)(null);
    var useFloating2 = /* @__PURE__ */ __name((props) => {
      var _a;
      const context = (0, import_react.useContext)(FloatingOverrideContext2);
      return (_a = context || Floating.useFloating) == null ? void 0 : _a(props);
    }, "useFloating");
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/Popper.js
var require_Popper = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/Popper.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popper_exports = {};
    __export2(Popper_exports, {
      Popper: () => Popper,
      PopperAnchor: () => PopperAnchor,
      PopperArrow: () => PopperArrow,
      PopperContent: () => PopperContent,
      createPopperScope: () => createPopperScope,
      usePopperContext: () => usePopperContext
    });
    module2.exports = __toCommonJS2(Popper_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_floating = require_floating();
    var import_useFloating = require_useFloating();
    var POPPER_NAME = "Popper";
    var [createPopperContext, createScope] = (0, import_create_context.createContextScope)(POPPER_NAME);
    var createPopperScope = createScope;
    var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
    var Popper = /* @__PURE__ */ __name((props) => {
      const {
        __scopePopper,
        children,
        size: size2,
        strategy = "absolute",
        placement = "bottom",
        stayInFrame,
        allowFlip
      } = props;
      const [isMounted, setIsMounted] = React3.useState(false);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        setIsMounted(true);
      }, []);
      const anchorRef = React3.useRef();
      const [arrowEl, setArrow] = React3.useState(null);
      const [arrowSize, setArrowSize] = React3.useState(0);
      const arrowRef = React3.useRef();
      const floating = (0, import_useFloating.useFloating)({
        strategy,
        placement,
        middleware: [
          stayInFrame ? (0, import_floating.shift)(typeof stayInFrame === "boolean" ? {} : stayInFrame) : null,
          allowFlip ? (0, import_floating.flip)(typeof allowFlip === "boolean" ? {} : allowFlip) : null,
          arrowEl ? (0, import_floating.arrow)({ element: arrowEl }) : null,
          arrowSize ? (0, import_floating.offset)(arrowSize) : null
        ].filter(Boolean)
      });
      const { refs, middlewareData } = floating;
      const composedArrowRefs = (0, import_compose_refs.useComposedRefs)(arrowRef, setArrow);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        floating.reference(anchorRef.current);
      }, [anchorRef]);
      React3.useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) {
          return;
        }
        return (0, import_floating.autoUpdate)(refs.reference.current, refs.floating.current, floating.update);
      }, [floating.update, refs.floating, refs.reference]);
      const arrowStyle = React3.useMemo(() => {
        return middlewareData.arrow;
      }, [JSON.stringify(middlewareData.arrow || {})]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperProvider, {
        scope: __scopePopper,
        anchorRef,
        size: size2,
        arrowRef: composedArrowRefs,
        arrowStyle,
        onArrowSize: setArrowSize,
        isMounted,
        ...floating,
        children
      });
    }, "Popper");
    Popper.displayName = POPPER_NAME;
    var ANCHOR_NAME = "PopperAnchor";
    var PopperAnchor = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopper, virtualRef, ...anchorProps } = props;
        const { anchorRef, getReferenceProps } = usePopperContext(ANCHOR_NAME, __scopePopper);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref, anchorRef);
        if (virtualRef) {
          return null;
        }
        const stackProps = {
          ref: composedRefs,
          ...anchorProps
        };
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          ...getReferenceProps ? getReferenceProps(stackProps) : stackProps
        });
      }
    );
    PopperAnchor.displayName = ANCHOR_NAME;
    var CONTENT_NAME = "PopperContent";
    var PopperContentFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "PopperContent",
      backgroundColor: "$background",
      alignItems: "center",
      radiused: true,
      variants: {
        size: {
          "...size": (val, { tokens: tokens2 }) => {
            return {
              padding: tokens2.space[val],
              borderRadius: tokens2.radius[val]
            };
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var PopperContent = PopperContentFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopePopper, ...contentProps } = props;
          const { strategy, placement, floating, x, y, getFloatingProps, size: size2, isMounted } = usePopperContext(CONTENT_NAME, __scopePopper);
          const contentRefs = (0, import_compose_refs.useComposedRefs)(floating, forwardedRef);
          const contents = React3.useMemo(() => {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContentFrame, {
              "data-placement": placement,
              "data-strategy": strategy,
              size: contentProps.size || size2,
              ...contentProps
            }, "popper-content-frame");
          }, [placement, strategy, props]);
          if (!isMounted) {
            return null;
          }
          const frameProps = {
            ref: contentRefs,
            x: x || 0,
            y: y || 0,
            position: strategy
          };
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
            ...getFloatingProps ? getFloatingProps(frameProps) : frameProps,
            children: contents
          });
        }
      )
    );
    PopperContent.displayName = CONTENT_NAME;
    var ARROW_NAME = "PopperArrow";
    var PopperArrowFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: "PopperArrow",
      borderColor: "$borderColor",
      backgroundColor: "$background",
      position: "relative"
    });
    var PopperArrowOuterFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: "PopperArrowOuter",
      position: "absolute",
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    });
    var opposites = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    };
    var PopperArrow = PopperArrowFrame.extractable(
      React3.forwardRef(/* @__PURE__ */ __name(function PopperArrow2(props, forwardedRef) {
        const { __scopePopper, offset: offset2, size: sizeProp, borderWidth = 0, ...arrowProps } = props;
        const context = usePopperContext(ARROW_NAME, __scopePopper);
        const tokens2 = (0, import_core4.getTokens)();
        const sizeVal = sizeProp ?? context.size;
        const sizeValResolved = (0, import_core4.getVariableValue)((0, import_core4.stepTokenUpOrDown)(tokens2.space, sizeVal, -2, [2]));
        const size2 = +sizeValResolved;
        const { placement } = context;
        const { x, y } = context.arrowStyle || { x: 0, y: 0 };
        const refs = (0, import_compose_refs.useComposedRefs)(context.arrowRef, forwardedRef);
        const primaryPlacement = placement ? placement.split("-")[0] : "top";
        const arrowStyle = { x, y, width: size2, height: size2 };
        const innerArrowStyle = {};
        const isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
        if (primaryPlacement) {
          arrowStyle[isVertical ? "width" : "height"] = size2 * 2;
          const oppSide = opposites[primaryPlacement];
          if (oppSide) {
            arrowStyle[oppSide] = -size2;
            innerArrowStyle[oppSide] = size2 / 2;
          }
          if (oppSide === "top" || oppSide === "bottom") {
            arrowStyle.left = 0;
          }
          if (oppSide === "left" || oppSide === "right") {
            arrowStyle.top = 0;
          }
        }
        (0, import_core4.useIsomorphicLayoutEffect)(() => {
          var _a;
          (_a = context.onArrowSize) == null ? void 0 : _a.call(context, size2);
        }, [size2, context.onArrowSize]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperArrowOuterFrame, {
          ref: refs,
          ...arrowStyle,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperArrowFrame, {
            width: size2,
            height: size2,
            ...arrowProps,
            ...innerArrowStyle,
            rotate: "45deg",
            ...primaryPlacement === "bottom" && {
              borderBottomWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "top" && {
              borderTopWidth: borderWidth,
              borderLeftWidth: borderWidth
            },
            ...primaryPlacement === "right" && {
              borderTopWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "left" && {
              borderBottomWidth: borderWidth,
              borderLeftWidth: borderWidth
            }
          })
        });
      }, "PopperArrow2"))
    );
    PopperArrow.displayName = ARROW_NAME;
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/index.js
var require_cjs29 = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      FloatingOverrideContext: () => import_useFloating.FloatingOverrideContext
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_useFloating = require_useFloating();
    __reExport2(src_exports, require_Popper(), module2.exports);
  }
});

// ../../node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.umd.js
var require_floating_ui_react_dom_interactions_umd = __commonJS({
  "../../node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_floating_ui_react_dom_umd(), require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/react-dom", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIReactDOM = {}, global2.FloatingUIReactDOM, global2.React, global2.ReactDOM));
    })(exports, function(exports2, reactDom, React3, reactDom$1) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      __name(_interopNamespace, "_interopNamespace");
      var React__namespace = /* @__PURE__ */ _interopNamespace(React3);
      var index = typeof document !== "undefined" ? React3.useLayoutEffect : React3.useEffect;
      function createPubSub() {
        const map = /* @__PURE__ */ new Map();
        return {
          emit(event, data) {
            var _map$get;
            (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
          },
          on(event, listener) {
            map.set(event, [...map.get(event) || [], listener]);
          },
          off(event, listener) {
            map.set(event, (map.get(event) || []).filter((l) => l !== listener));
          }
        };
      }
      __name(createPubSub, "createPubSub");
      let serverHandoffComplete = false;
      let count = 0;
      const genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
      function useFloatingId() {
        const [id, setId] = React__namespace.useState(() => serverHandoffComplete ? genId() : void 0);
        index(() => {
          if (id == null) {
            setId(genId());
          }
        }, []);
        React__namespace.useEffect(() => {
          if (!serverHandoffComplete) {
            serverHandoffComplete = true;
          }
        }, []);
        return id;
      }
      __name(useFloatingId, "useFloatingId");
      const useReactId = React__namespace[/* @__PURE__ */ "useId".toString()];
      const useId = useReactId != null ? useReactId : useFloatingId;
      const FloatingNodeContext = /* @__PURE__ */ React__namespace.createContext(null);
      const FloatingTreeContext = /* @__PURE__ */ React__namespace.createContext(null);
      const useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
        var _React$useContext$id, _React$useContext;
        return (_React$useContext$id = (_React$useContext = React__namespace.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) != null ? _React$useContext$id : null;
      }, "useFloatingParentNodeId");
      const useFloatingTree = /* @__PURE__ */ __name(() => React__namespace.useContext(FloatingTreeContext), "useFloatingTree");
      const useFloatingNodeId = /* @__PURE__ */ __name(() => {
        const id = useId();
        const tree = useFloatingTree();
        const parentId = useFloatingParentNodeId();
        index(() => {
          const node = {
            id,
            parentId
          };
          tree == null ? void 0 : tree.addNode(node);
          return () => {
            tree == null ? void 0 : tree.removeNode(node);
          };
        }, [tree, id, parentId]);
        return id;
      }, "useFloatingNodeId");
      const FloatingNode = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          id
        } = _ref;
        const parentId = useFloatingParentNodeId();
        return /* @__PURE__ */ React__namespace.createElement(FloatingNodeContext.Provider, {
          value: React__namespace.useMemo(() => ({
            id,
            parentId
          }), [id, parentId])
        }, children);
      }, "FloatingNode");
      const FloatingTree = /* @__PURE__ */ __name((_ref2) => {
        let {
          children
        } = _ref2;
        const nodesRef = React__namespace.useRef([]);
        const addNode = React__namespace.useCallback((node) => {
          nodesRef.current = [...nodesRef.current, node];
        }, []);
        const removeNode = React__namespace.useCallback((node) => {
          nodesRef.current = nodesRef.current.filter((n) => n !== node);
        }, []);
        const events = React__namespace.useState(() => createPubSub())[0];
        return /* @__PURE__ */ React__namespace.createElement(FloatingTreeContext.Provider, {
          value: React__namespace.useMemo(() => ({
            nodesRef,
            addNode,
            removeNode,
            events
          }), [nodesRef, addNode, removeNode, events])
        }, children);
      }, "FloatingTree");
      function getDocument(floating) {
        var _floating$ownerDocume;
        return (_floating$ownerDocume = floating == null ? void 0 : floating.ownerDocument) != null ? _floating$ownerDocume : document;
      }
      __name(getDocument, "getDocument");
      function getWindow(value) {
        var _getDocument$defaultV;
        return (_getDocument$defaultV = getDocument(value).defaultView) != null ? _getDocument$defaultV : window;
      }
      __name(getWindow, "getWindow");
      function isElement(value) {
        return value ? value instanceof getWindow(value).Element : false;
      }
      __name(isElement, "isElement");
      function isHTMLElement(value) {
        return value ? value instanceof getWindow(value).HTMLElement : false;
      }
      __name(isHTMLElement, "isHTMLElement");
      function useFloating2(_temp) {
        let {
          open = false,
          onOpenChange = /* @__PURE__ */ __name(() => {
          }, "onOpenChange"),
          whileElementsMounted,
          placement,
          middleware,
          strategy,
          nodeId
        } = _temp === void 0 ? {} : _temp;
        const tree = useFloatingTree();
        const domReferenceRef = React__namespace.useRef(null);
        const dataRef = React__namespace.useRef({});
        const events = React__namespace.useState(() => createPubSub())[0];
        const floating = reactDom.useFloating({
          placement,
          middleware,
          strategy,
          whileElementsMounted
        });
        const refs = React__namespace.useMemo(() => ({
          ...floating.refs,
          domReference: domReferenceRef
        }), [floating.refs]);
        const context = React__namespace.useMemo(() => ({
          ...floating,
          refs,
          dataRef,
          nodeId,
          events,
          open,
          onOpenChange
        }), [floating, nodeId, events, open, onOpenChange, refs]);
        index(() => {
          const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
          if (node) {
            node.context = context;
          }
        });
        const {
          reference
        } = floating;
        const setReference = React__namespace.useCallback((node) => {
          if (isElement(node) || node === null) {
            context.refs.domReference.current = node;
          }
          reference(node);
        }, [reference, context.refs]);
        return React__namespace.useMemo(() => ({
          ...floating,
          context,
          refs,
          reference: setReference
        }), [floating, refs, context, setReference]);
      }
      __name(useFloating2, "useFloating");
      function mergeProps(userProps, propsList, elementKey) {
        const map = /* @__PURE__ */ new Map();
        return {
          ...elementKey === "floating" && {
            tabIndex: -1
          },
          ...userProps,
          ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
            if (!props) {
              return acc;
            }
            Object.entries(props).forEach((_ref) => {
              let [key, value] = _ref;
              if (key.indexOf("on") === 0) {
                if (!map.has(key)) {
                  map.set(key, []);
                }
                if (typeof value === "function") {
                  var _map$get;
                  (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
                }
                acc[key] = function() {
                  var _map$get2;
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
                };
              } else {
                acc[key] = value;
              }
            });
            return acc;
          }, {})
        };
      }
      __name(mergeProps, "mergeProps");
      const useInteractions2 = /* @__PURE__ */ __name(function(propsList) {
        if (propsList === void 0) {
          propsList = [];
        }
        return {
          getReferenceProps: (userProps) => mergeProps(userProps, propsList, "reference"),
          getFloatingProps: (userProps) => mergeProps(userProps, propsList, "floating"),
          getItemProps: (userProps) => mergeProps(userProps, propsList, "item")
        };
      }, "useInteractions");
      function getChildren(nodes, id) {
        var _nodes$filter;
        let allChildren = (_nodes$filter = nodes.filter((node) => {
          var _node$context;
          return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
        })) != null ? _nodes$filter : [];
        let currentChildren = allChildren;
        while (currentChildren.length) {
          var _nodes$filter2;
          currentChildren = (_nodes$filter2 = nodes.filter((node) => {
            var _currentChildren;
            return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
              var _node$context2;
              return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
            });
          })) != null ? _nodes$filter2 : [];
          allChildren = allChildren.concat(currentChildren);
        }
        return allChildren;
      }
      __name(getChildren, "getChildren");
      function isPointInPolygon(point, polygon) {
        const [x, y] = point;
        let isInside = false;
        const length = polygon.length;
        for (let i = 0, j = length - 1; i < length; j = i++) {
          const [xi, yi] = polygon[i] || [0, 0];
          const [xj, yj] = polygon[j] || [0, 0];
          const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
          if (intersect) {
            isInside = !isInside;
          }
        }
        return isInside;
      }
      __name(isPointInPolygon, "isPointInPolygon");
      function safePolygon(_temp) {
        let {
          restMs = 0,
          buffer = 0.5,
          debug = null
        } = _temp === void 0 ? {} : _temp;
        let timeoutId;
        let polygonIsDestroyed = false;
        return (_ref) => {
          let {
            x,
            y,
            placement,
            refs,
            onClose,
            nodeId,
            tree,
            leave = false
          } = _ref;
          return /* @__PURE__ */ __name(function onPointerMove(event) {
            var _refs$domReference$cu, _refs$floating$curren;
            clearTimeout(timeoutId);
            function close() {
              clearTimeout(timeoutId);
              onClose();
            }
            __name(close, "close");
            if (event.pointerType && event.pointerType !== "mouse") {
              return;
            }
            const {
              clientX,
              clientY
            } = event;
            const target = "composedPath" in event ? event.composedPath()[0] : event.target;
            const targetNode = target;
            if (event.type === "pointermove" && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains(targetNode)) {
              return;
            }
            if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
              let {
                context
              } = _ref2;
              return context == null ? void 0 : context.open;
            })) {
              return;
            }
            if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(targetNode) && !leave) {
              polygonIsDestroyed = true;
              return;
            }
            if (!refs.domReference.current || !refs.floating.current || placement == null || x == null || y == null) {
              return;
            }
            const refRect = refs.domReference.current.getBoundingClientRect();
            const rect = refs.floating.current.getBoundingClientRect();
            const side = placement.split("-")[0];
            const cursorLeaveFromRight = x > rect.right - rect.width / 2;
            const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
            if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
              return close();
            }
            switch (side) {
              case "top":
                if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1) {
                  return;
                }
                break;
              case "bottom":
                if (clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom) {
                  return;
                }
                break;
              case "left":
                if (clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom) {
                  return;
                }
                break;
              case "right":
                if (clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
                  return;
                }
                break;
            }
            if (polygonIsDestroyed) {
              return close();
            }
            function getPolygon(_ref3) {
              let [x2, y2] = _ref3;
              const isFloatingWider = rect.width > refRect.width;
              const isFloatingTaller = rect.height > refRect.height;
              switch (side) {
                case "top": {
                  const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
                  const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
                  const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
                case "bottom": {
                  const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
                  const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
                  const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
                case "left": {
                  const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
                  return [...commonPoints, cursorPointOne, cursorPointTwo];
                }
                case "right": {
                  const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
              }
            }
            __name(getPolygon, "getPolygon");
            const poly = getPolygon([x, y]);
            if (process.env.NODE_ENV !== "production") {
              debug == null ? void 0 : debug(poly.slice(0, 4).join(", "));
            }
            if (!isPointInPolygon([clientX, clientY], poly)) {
              close();
            } else if (restMs) {
              timeoutId = setTimeout(onClose, restMs);
            }
          }, "onPointerMove");
        };
      }
      __name(safePolygon, "safePolygon");
      const DEFAULT_ID = "floating-ui-root";
      const useFloatingPortalNode = /* @__PURE__ */ __name(function(_temp) {
        let {
          id = DEFAULT_ID,
          enabled = true
        } = _temp === void 0 ? {} : _temp;
        const [portalEl, setPortalEl] = React__namespace.useState(null);
        index(() => {
          if (!enabled) {
            return;
          }
          const rootNode = document.getElementById(id);
          if (rootNode) {
            setPortalEl(rootNode);
          } else {
            const newPortalEl = document.createElement("div");
            newPortalEl.id = id;
            setPortalEl(newPortalEl);
            if (!document.body.contains(newPortalEl)) {
              document.body.appendChild(newPortalEl);
            }
          }
        }, [id, enabled]);
        return portalEl;
      }, "useFloatingPortalNode");
      const FloatingPortal = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          id = DEFAULT_ID,
          root = null
        } = _ref;
        const portalNode = useFloatingPortalNode({
          id,
          enabled: !root
        });
        if (root) {
          return /* @__PURE__ */ reactDom$1.createPortal(children, root);
        }
        if (portalNode) {
          return /* @__PURE__ */ reactDom$1.createPortal(children, portalNode);
        }
        return null;
      }, "FloatingPortal");
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      __name(_extends, "_extends");
      function getPlatform() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.platform) {
          return uaData.platform;
        }
        return navigator.platform;
      }
      __name(getPlatform, "getPlatform");
      function getUserAgent() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands) {
          return uaData.brands.map((_ref) => {
            let {
              brand,
              version
            } = _ref;
            return brand + "/" + version;
          }).join(" ");
        }
        return navigator.userAgent;
      }
      __name(getUserAgent, "getUserAgent");
      const identifier = "data-floating-ui-scroll-lock";
      const FloatingOverlay = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
        let {
          lockScroll = false,
          ...rest
        } = _ref;
        index(() => {
          var _window$visualViewpor, _window$visualViewpor2, _window$visualViewpor3, _window$visualViewpor4;
          if (!lockScroll) {
            return;
          }
          const alreadyLocked = document.body.hasAttribute(identifier);
          if (alreadyLocked) {
            return;
          }
          document.body.setAttribute(identifier, "");
          const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
          const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
          const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
            Object.assign(document.body.style, {
              overflow: "hidden",
              [paddingProp]: scrollbarWidth + "px"
            });
            return () => {
              document.body.removeAttribute(identifier);
              Object.assign(document.body.style, {
                overflow: "",
                [paddingProp]: ""
              });
            };
          }
          const offsetLeft = (_window$visualViewpor = (_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetLeft) != null ? _window$visualViewpor : 0;
          const offsetTop = (_window$visualViewpor3 = (_window$visualViewpor4 = window.visualViewport) == null ? void 0 : _window$visualViewpor4.offsetTop) != null ? _window$visualViewpor3 : 0;
          const scrollX = window.pageXOffset;
          const scrollY = window.pageYOffset;
          Object.assign(document.body.style, {
            position: "fixed",
            overflow: "hidden",
            top: -(scrollY - Math.floor(offsetTop)) + "px",
            left: -(scrollX - Math.floor(offsetLeft)) + "px",
            right: "0",
            [paddingProp]: scrollbarWidth + "px"
          });
          return () => {
            Object.assign(document.body.style, {
              position: "",
              overflow: "",
              top: "",
              left: "",
              right: "",
              [paddingProp]: ""
            });
            document.body.removeAttribute(identifier);
            window.scrollTo(scrollX, scrollY);
          };
        }, [lockScroll]);
        return /* @__PURE__ */ React__namespace.createElement("div", _extends({
          ref
        }, rest, {
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...rest.style
          }
        }));
      }, "FloatingOverlay"));
      var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
        if (typeof document === "undefined") {
          return null;
        }
        var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
        return sampleTarget.ownerDocument.body;
      }, "getDefaultParent");
      var counterMap = /* @__PURE__ */ new WeakMap();
      var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      var markerMap = {};
      var lockCount = 0;
      var hideOthers2 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
        if (parentNode === void 0) {
          parentNode = getDefaultParent(originalTarget);
        }
        if (markerName === void 0) {
          markerName = "data-aria-hidden";
        }
        var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
        if (!markerMap[markerName]) {
          markerMap[markerName] = /* @__PURE__ */ new WeakMap();
        }
        var markerCounter = markerMap[markerName];
        var hiddenNodes = [];
        var elementsToKeep = /* @__PURE__ */ new Set();
        var keep = /* @__PURE__ */ __name(function(el) {
          if (!el || elementsToKeep.has(el)) {
            return;
          }
          elementsToKeep.add(el);
          keep(el.parentNode);
        }, "keep");
        targets.forEach(keep);
        var deep = /* @__PURE__ */ __name(function(parent) {
          if (!parent || targets.indexOf(parent) >= 0) {
            return;
          }
          Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
              deep(node);
            } else {
              var attr = node.getAttribute("aria-hidden");
              var alreadyHidden = attr !== null && attr !== "false";
              var counterValue = (counterMap.get(node) || 0) + 1;
              var markerValue = (markerCounter.get(node) || 0) + 1;
              counterMap.set(node, counterValue);
              markerCounter.set(node, markerValue);
              hiddenNodes.push(node);
              if (counterValue === 1 && alreadyHidden) {
                uncontrolledNodes.set(node, true);
              }
              if (markerValue === 1) {
                node.setAttribute(markerName, "true");
              }
              if (!alreadyHidden) {
                node.setAttribute("aria-hidden", "true");
              }
            }
          });
        }, "deep");
        deep(parentNode);
        elementsToKeep.clear();
        lockCount++;
        return function() {
          hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
              if (!uncontrolledNodes.has(node)) {
                node.removeAttribute("aria-hidden");
              }
              uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
              node.removeAttribute(markerName);
            }
          });
          lockCount--;
          if (!lockCount) {
            counterMap = /* @__PURE__ */ new WeakMap();
            counterMap = /* @__PURE__ */ new WeakMap();
            uncontrolledNodes = /* @__PURE__ */ new WeakMap();
            markerMap = {};
          }
        };
      }, "hideOthers");
      function activeElement(doc) {
        let activeElement2 = doc.activeElement;
        while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
          var _activeElement, _activeElement$shadow;
          activeElement2 = activeElement2.shadowRoot.activeElement;
        }
        return activeElement2;
      }
      __name(activeElement, "activeElement");
      function getAncestors(nodes, id) {
        var _nodes$find;
        let allAncestors = [];
        let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
        while (currentParentId) {
          const currentNode = nodes.find((node) => node.id === currentParentId);
          currentParentId = currentNode == null ? void 0 : currentNode.parentId;
          if (currentNode) {
            allAncestors = allAncestors.concat(currentNode);
          }
        }
        return allAncestors;
      }
      __name(getAncestors, "getAncestors");
      const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function isTypeableElement(element) {
        return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
      }
      __name(isTypeableElement, "isTypeableElement");
      function stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      __name(stopEvent, "stopEvent");
      function useLatestRef(value) {
        const ref = React3.useRef(value);
        index(() => {
          ref.current = value;
        });
        return ref;
      }
      __name(useLatestRef, "useLatestRef");
      function focus(el, preventScroll) {
        if (preventScroll === void 0) {
          preventScroll = false;
        }
        requestAnimationFrame(() => {
          el == null ? void 0 : el.focus({
            preventScroll
          });
        });
      }
      __name(focus, "focus");
      const SELECTOR = "select:not([disabled]),a[href],button:not([disabled]),[tabindex],iframe,object,embed,area[href],audio[controls],video[controls]," + TYPEABLE_SELECTOR;
      const FocusGuard = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
        return /* @__PURE__ */ React__namespace.createElement("span", _extends({}, props, {
          ref,
          tabIndex: 0,
          style: {
            position: "fixed",
            opacity: "0",
            pointerEvents: "none",
            outline: "0"
          }
        }));
      }, "FocusGuard"));
      function FloatingFocusManager(_ref) {
        var _tree$nodesRef$curren;
        let {
          context: {
            refs,
            nodeId,
            onOpenChange,
            dataRef,
            events
          },
          children,
          order = ["content"],
          endGuard = true,
          preventTabbing = false,
          initialFocus = 0,
          returnFocus = true,
          modal = true
        } = _ref;
        const orderRef = useLatestRef(order);
        const onOpenChangeRef = useLatestRef(onOpenChange);
        const tree = useFloatingTree();
        const root = (tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === nodeId)) == null ? void 0 : _tree$nodesRef$curren.parentId) == null;
        const getTabbableElements = React__namespace.useCallback(() => {
          return orderRef.current.map((type) => {
            if (type === "reference") {
              return refs.domReference.current;
            }
            if (refs.floating.current && type === "floating") {
              return refs.floating.current;
            }
            if (type === "content") {
              var _refs$floating$curren, _refs$floating$curren2;
              return Array.from((_refs$floating$curren = (_refs$floating$curren2 = refs.floating.current) == null ? void 0 : _refs$floating$curren2.querySelectorAll(SELECTOR)) != null ? _refs$floating$curren : []);
            }
            return null;
          }).flat().filter((el) => {
            if (el === refs.floating.current || el === refs.domReference.current) {
              return true;
            }
            if (isHTMLElement(el)) {
              var _el$getAttribute;
              const tabIndex = (_el$getAttribute = el.getAttribute("tabindex")) != null ? _el$getAttribute : "0";
              return tabIndex[0].trim() !== "-";
            }
          });
        }, [orderRef, refs]);
        React__namespace.useEffect(() => {
          if (!modal) {
            return;
          }
          const noTabbableContentElements = getTabbableElements().filter((el) => el !== refs.floating.current && el !== refs.domReference.current).length === 0;
          function onKeyDown(event) {
            if (event.key === "Tab") {
              if (preventTabbing || noTabbableContentElements) {
                stopEvent(event);
              }
              const els = getTabbableElements();
              const target = "composedPath" in event ? event.composedPath()[0] : event.target;
              if (orderRef.current[0] === "reference" && target === refs.domReference.current) {
                stopEvent(event);
                if (event.shiftKey) {
                  focus(els[els.length - 1]);
                } else {
                  focus(els[1]);
                }
              }
              if (orderRef.current[1] === "floating" && target === refs.floating.current && event.shiftKey) {
                stopEvent(event);
                focus(els[0]);
              }
            }
          }
          __name(onKeyDown, "onKeyDown");
          const doc = getDocument(refs.floating.current);
          doc.addEventListener("keydown", onKeyDown);
          return () => {
            doc.removeEventListener("keydown", onKeyDown);
          };
        }, [preventTabbing, modal, getTabbableElements, orderRef, refs]);
        React__namespace.useEffect(() => {
          function onFocusOut(event) {
            var _refs$floating$curren3, _getAncestors;
            const relatedTarget = event.relatedTarget;
            const focusMovedOutsideFloating = !((_refs$floating$curren3 = refs.floating.current) != null && _refs$floating$curren3.contains(relatedTarget));
            const focusMovedOutsideReference = isElement(refs.domReference.current) && !refs.domReference.current.contains(relatedTarget);
            const isChildOpen = tree && getChildren(tree.nodesRef.current, nodeId).length > 0;
            const isParentRelated = tree && event.currentTarget === refs.domReference.current && ((_getAncestors = getAncestors(tree.nodesRef.current, nodeId)) == null ? void 0 : _getAncestors.some((node) => {
              var _node$context, _node$context$refs$fl;
              return (_node$context = node.context) == null ? void 0 : (_node$context$refs$fl = _node$context.refs.floating.current) == null ? void 0 : _node$context$refs$fl.contains(relatedTarget);
            }));
            if (focusMovedOutsideFloating && focusMovedOutsideReference && !isChildOpen && !isParentRelated) {
              onOpenChangeRef.current(false);
            }
          }
          __name(onFocusOut, "onFocusOut");
          const floating = refs.floating.current;
          const reference = refs.domReference.current;
          if (floating && isHTMLElement(reference)) {
            !modal && floating.addEventListener("focusout", onFocusOut);
            !modal && reference.addEventListener("focusout", onFocusOut);
            let cleanup;
            if (modal) {
              if (orderRef.current.includes("reference")) {
                cleanup = hideOthers2([reference, floating]);
              } else {
                cleanup = hideOthers2(floating);
              }
            }
            return () => {
              !modal && floating.removeEventListener("focusout", onFocusOut);
              !modal && reference.removeEventListener("focusout", onFocusOut);
              cleanup == null ? void 0 : cleanup();
            };
          }
        }, [nodeId, tree, modal, onOpenChangeRef, orderRef, dataRef, getTabbableElements, refs]);
        React__namespace.useEffect(() => {
          if (preventTabbing && !root) {
            return;
          }
          const floating = refs.floating.current;
          const doc = getDocument(floating);
          let returnFocusValue = returnFocus;
          let preventReturnFocusScroll = false;
          let previouslyFocusedElement = activeElement(doc);
          if (previouslyFocusedElement === doc.body && refs.domReference.current) {
            previouslyFocusedElement = refs.domReference.current;
          }
          if (!preventTabbing) {
            if (typeof initialFocus === "number") {
              var _getTabbableElements$;
              focus((_getTabbableElements$ = getTabbableElements()[initialFocus]) != null ? _getTabbableElements$ : floating);
            } else if (isHTMLElement(initialFocus == null ? void 0 : initialFocus.current)) {
              var _initialFocus$current;
              focus((_initialFocus$current = initialFocus.current) != null ? _initialFocus$current : floating);
            }
          }
          function onDismiss(allowReturnFocus) {
            if (allowReturnFocus === void 0) {
              allowReturnFocus = false;
            }
            if (typeof allowReturnFocus === "object") {
              returnFocusValue = true;
              preventReturnFocusScroll = allowReturnFocus.preventScroll;
            } else {
              returnFocusValue = allowReturnFocus;
            }
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
            if (returnFocusValue && isHTMLElement(previouslyFocusedElement)) {
              focus(previouslyFocusedElement, preventReturnFocusScroll);
            }
          };
        }, [preventTabbing, getTabbableElements, initialFocus, returnFocus, refs, events, root]);
        const isTypeableCombobox = /* @__PURE__ */ __name(() => {
          var _refs$domReference$cu;
          return ((_refs$domReference$cu = refs.domReference.current) == null ? void 0 : _refs$domReference$cu.getAttribute("role")) === "combobox" && isTypeableElement(refs.domReference.current);
        }, "isTypeableCombobox");
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, modal && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          onFocus: (event) => {
            if (isTypeableCombobox()) {
              return;
            }
            stopEvent(event);
            const els = getTabbableElements();
            if (order[0] === "reference") {
              focus(els[0]);
            } else {
              focus(els[els.length - 1]);
            }
          }
        }), /* @__PURE__ */ React__namespace.cloneElement(children, order.includes("floating") ? {
          tabIndex: 0
        } : {}), modal && endGuard && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          onFocus: (event) => {
            if (isTypeableCombobox()) {
              return;
            }
            stopEvent(event);
            focus(getTabbableElements()[0]);
          }
        }));
      }
      __name(FloatingFocusManager, "FloatingFocusManager");
      function usePrevious(value) {
        const ref = React3.useRef();
        index(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      }
      __name(usePrevious, "usePrevious");
      function getDelay(value, prop, pointerType) {
        if (pointerType && pointerType !== "mouse") {
          return 0;
        }
        if (typeof value === "number") {
          return value;
        }
        return value == null ? void 0 : value[prop];
      }
      __name(getDelay, "getDelay");
      const useHover = /* @__PURE__ */ __name(function(context, _temp) {
        let {
          enabled = true,
          delay = 0,
          handleClose = null,
          mouseOnly = false,
          restMs = 0
        } = _temp === void 0 ? {} : _temp;
        const {
          open,
          onOpenChange,
          dataRef,
          events,
          refs
        } = context;
        const tree = useFloatingTree();
        const parentId = useFloatingParentNodeId();
        const onOpenChangeRef = useLatestRef(onOpenChange);
        const handleCloseRef = useLatestRef(handleClose);
        const previousOpen = usePrevious(open);
        const pointerTypeRef = React__namespace.useRef();
        const timeoutRef = React__namespace.useRef();
        const handlerRef = React__namespace.useRef();
        const restTimeoutRef = React__namespace.useRef();
        const blockMouseMoveRef = React__namespace.useRef(true);
        const performedPointerEventsMutationRef = React__namespace.useRef(false);
        const isHoverOpen = React__namespace.useCallback(() => {
          var _dataRef$current$open;
          const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
          return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
        }, [dataRef]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onDismiss() {
            clearTimeout(timeoutRef.current);
            clearTimeout(restTimeoutRef.current);
            blockMouseMoveRef.current = true;
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
          };
        }, [enabled, events, refs]);
        React__namespace.useEffect(() => {
          if (!enabled || !handleCloseRef.current) {
            return;
          }
          function onLeave() {
            if (isHoverOpen()) {
              onOpenChangeRef.current(false);
            }
          }
          __name(onLeave, "onLeave");
          const html = getDocument(refs.floating.current).documentElement;
          html.addEventListener("mouseleave", onLeave);
          return () => {
            html.removeEventListener("mouseleave", onLeave);
          };
        }, [refs, onOpenChangeRef, enabled, handleCloseRef, dataRef, isHoverOpen]);
        const closeWithDelay = React__namespace.useCallback(function(runElseBranch) {
          if (runElseBranch === void 0) {
            runElseBranch = true;
          }
          const closeDelay = getDelay(delay, "close", pointerTypeRef.current);
          if (closeDelay && !handlerRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => onOpenChangeRef.current(false), closeDelay);
          } else if (runElseBranch) {
            clearTimeout(timeoutRef.current);
            onOpenChangeRef.current(false);
          }
        }, [delay, onOpenChangeRef]);
        const cleanupPointerMoveHandler = React__namespace.useCallback(() => {
          if (handlerRef.current) {
            getDocument(refs.floating.current).removeEventListener("pointermove", handlerRef.current);
            handlerRef.current = void 0;
          }
        }, [refs]);
        const clearPointerEvents = React__namespace.useCallback(() => {
          getDocument(refs.floating.current).body.style.pointerEvents = "";
          performedPointerEventsMutationRef.current = false;
        }, [refs]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function isClickLikeOpenEvent() {
            return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
          }
          __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
          function onMouseEnter(event) {
            clearTimeout(timeoutRef.current);
            blockMouseMoveRef.current = false;
            if (open || mouseOnly && pointerTypeRef.current !== "mouse" || restMs > 0 && getDelay(delay, "open") === 0) {
              return;
            }
            dataRef.current.openEvent = event;
            const openDelay = getDelay(delay, "open", pointerTypeRef.current);
            if (openDelay) {
              timeoutRef.current = setTimeout(() => {
                onOpenChangeRef.current(true);
              }, openDelay);
            } else {
              onOpenChangeRef.current(true);
            }
          }
          __name(onMouseEnter, "onMouseEnter");
          function onMouseLeave(event) {
            if (isClickLikeOpenEvent()) {
              return;
            }
            const doc = getDocument(refs.floating.current);
            clearTimeout(restTimeoutRef.current);
            if (handleCloseRef.current) {
              clearTimeout(timeoutRef.current);
              handlerRef.current && doc.removeEventListener("pointermove", handlerRef.current);
              handlerRef.current = handleCloseRef.current({
                ...context,
                tree,
                x: event.clientX,
                y: event.clientY,
                onClose() {
                  clearPointerEvents();
                  cleanupPointerMoveHandler();
                  closeWithDelay();
                }
              });
              doc.addEventListener("pointermove", handlerRef.current);
              return;
            }
            closeWithDelay();
          }
          __name(onMouseLeave, "onMouseLeave");
          function onScrollMouseLeave(event) {
            if (isClickLikeOpenEvent()) {
              return;
            }
            handleCloseRef.current == null ? void 0 : handleCloseRef.current({
              ...context,
              tree,
              x: event.clientX,
              y: event.clientY,
              leave: true,
              onClose() {
                clearPointerEvents();
                cleanupPointerMoveHandler();
                closeWithDelay();
              }
            })(event);
          }
          __name(onScrollMouseLeave, "onScrollMouseLeave");
          const floating = refs.floating.current;
          const reference = refs.domReference.current;
          if (isElement(reference)) {
            open && reference.addEventListener("mouseleave", onScrollMouseLeave);
            floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
            reference.addEventListener("mousemove", onMouseEnter, {
              once: true
            });
            reference.addEventListener("mouseenter", onMouseEnter);
            reference.addEventListener("mouseleave", onMouseLeave);
            return () => {
              open && reference.removeEventListener("mouseleave", onScrollMouseLeave);
              floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
              reference.removeEventListener("mousemove", onMouseEnter);
              reference.removeEventListener("mouseenter", onMouseEnter);
              reference.removeEventListener("mouseleave", onMouseLeave);
            };
          }
        }, [enabled, closeWithDelay, context, delay, handleCloseRef, dataRef, mouseOnly, onOpenChangeRef, open, tree, restMs, cleanupPointerMoveHandler, clearPointerEvents, refs]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open && handleCloseRef.current && isHoverOpen()) {
            getDocument(refs.floating.current).body.style.pointerEvents = "none";
            performedPointerEventsMutationRef.current = true;
            const reference = refs.domReference.current;
            const floating = refs.floating.current;
            if (isElement(reference) && floating) {
              var _tree$nodesRef$curren, _tree$nodesRef$curren2;
              const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
              if (parentFloating) {
                parentFloating.style.pointerEvents = "";
              }
              reference.style.pointerEvents = "auto";
              floating.style.pointerEvents = "auto";
              return () => {
                reference.style.pointerEvents = "";
                floating.style.pointerEvents = "";
              };
            }
          }
        }, [enabled, open, parentId, refs, tree, handleCloseRef, dataRef, isHoverOpen]);
        index(() => {
          if (previousOpen && !open) {
            pointerTypeRef.current = void 0;
            cleanupPointerMoveHandler();
            clearPointerEvents();
          }
        });
        React__namespace.useEffect(() => {
          return () => {
            cleanupPointerMoveHandler();
            clearTimeout(timeoutRef.current);
            clearTimeout(restTimeoutRef.current);
            if (performedPointerEventsMutationRef.current) {
              clearPointerEvents();
            }
          };
        }, [enabled, cleanupPointerMoveHandler, clearPointerEvents]);
        if (!enabled) {
          return {};
        }
        function setPointerRef(event) {
          pointerTypeRef.current = event.pointerType;
        }
        __name(setPointerRef, "setPointerRef");
        return {
          reference: {
            onPointerDown: setPointerRef,
            onPointerEnter: setPointerRef,
            onMouseMove() {
              if (open || restMs === 0) {
                return;
              }
              clearTimeout(restTimeoutRef.current);
              restTimeoutRef.current = setTimeout(() => {
                if (!blockMouseMoveRef.current) {
                  onOpenChange(true);
                }
              }, restMs);
            }
          },
          floating: {
            onMouseEnter() {
              clearTimeout(timeoutRef.current);
            },
            onMouseLeave() {
              closeWithDelay(false);
            }
          }
        };
      }, "useHover");
      const FloatingDelayGroupContext = /* @__PURE__ */ React__namespace.createContext({
        delay: 1e3,
        initialDelay: 1e3,
        currentId: null,
        setCurrentId: () => {
        },
        setState: () => {
        }
      });
      const useDelayGroupContext = /* @__PURE__ */ __name(() => React__namespace.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
      const FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          delay
        } = _ref;
        const [state, setState] = React__namespace.useState({
          delay,
          initialDelay: delay,
          currentId: null
        });
        const setCurrentId = React__namespace.useCallback((currentId) => {
          setState((state2) => ({
            ...state2,
            currentId
          }));
        }, []);
        return /* @__PURE__ */ React__namespace.createElement(FloatingDelayGroupContext.Provider, {
          value: React__namespace.useMemo(() => ({
            ...state,
            setState,
            setCurrentId
          }), [state, setState, setCurrentId])
        }, children);
      }, "FloatingDelayGroup");
      const useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
        let {
          open,
          onOpenChange
        } = _ref2;
        let {
          id
        } = _ref3;
        const {
          currentId,
          initialDelay,
          setState
        } = useDelayGroupContext();
        const onOpenChangeRef = useLatestRef(onOpenChange);
        React__namespace.useEffect(() => {
          if (currentId && onOpenChangeRef.current) {
            setState((state) => ({
              ...state,
              delay: {
                open: 1,
                close: getDelay(initialDelay, "close")
              }
            }));
            if (currentId !== id) {
              onOpenChangeRef.current(false);
            }
          }
        }, [id, onOpenChangeRef, setState, currentId, initialDelay]);
        React__namespace.useEffect(() => {
          if (!open && currentId === id && onOpenChangeRef.current) {
            onOpenChangeRef.current(false);
            setState((state) => ({
              ...state,
              delay: initialDelay,
              currentId: null
            }));
          }
        }, [open, setState, currentId, id, onOpenChangeRef, initialDelay]);
      }, "useDelayGroup");
      function getArgsWithCustomFloatingHeight(args, prop) {
        return {
          ...args,
          rects: {
            ...args.rects,
            floating: {
              ...args.rects.floating,
              height: args.elements.floating[prop]
            }
          }
        };
      }
      __name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
      const inner = /* @__PURE__ */ __name((options) => ({
        name: "inner",
        options,
        async fn(middlewareArguments) {
          const {
            listRef,
            overflowRef,
            onFallbackChange,
            offset: innerOffset = 0,
            index: index2 = 0,
            minItemsVisible = 4,
            referenceOverflowThreshold = 0,
            ...detectOverflowOptions
          } = options;
          const {
            rects,
            elements: {
              floating
            }
          } = middlewareArguments;
          const item = listRef.current[index2];
          if (process.env.NODE_ENV !== "production") {
            if (!middlewareArguments.placement.startsWith("bottom")) {
              console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
            }
          }
          if (!item) {
            return {};
          }
          const nextArgs = {
            ...middlewareArguments,
            ...await reactDom.offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(middlewareArguments)
          };
          const overflow = await reactDom.detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, "scrollHeight"), detectOverflowOptions);
          const refOverflow = await reactDom.detectOverflow(nextArgs, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const diffY = Math.max(0, overflow.top);
          const nextY = nextArgs.y + diffY;
          const maxHeight = Math.max(0, floating.scrollHeight - diffY - Math.max(0, overflow.bottom));
          floating.style.maxHeight = maxHeight + "px";
          floating.scrollTop = diffY;
          if (onFallbackChange) {
            if (floating.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
              reactDom$1.flushSync(() => onFallbackChange(true));
            } else {
              reactDom$1.flushSync(() => onFallbackChange(false));
            }
          }
          if (overflowRef) {
            overflowRef.current = await reactDom.detectOverflow(getArgsWithCustomFloatingHeight({
              ...nextArgs,
              y: nextY
            }, "offsetHeight"), detectOverflowOptions);
          }
          return {
            y: nextY
          };
        }
      }), "inner");
      const useInnerOffset = /* @__PURE__ */ __name((_ref, _ref2) => {
        let {
          open,
          refs
        } = _ref;
        let {
          enabled = true,
          overflowRef,
          onChange
        } = _ref2;
        const onChangeRef = useLatestRef(onChange);
        const controlledScrollingRef = React__namespace.useRef(false);
        const prevScrollTopRef = React__namespace.useRef(null);
        const initialOverflowRef = React__namespace.useRef(null);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onWheel(e) {
            if (e.ctrlKey || !el || overflowRef.current == null) {
              return;
            }
            const dY = e.deltaY;
            const isAtTop = overflowRef.current.top >= -0.5;
            const isAtBottom = overflowRef.current.bottom >= -0.5;
            const remainingScroll = el.scrollHeight - el.clientHeight;
            const sign = dY < 0 ? -1 : 1;
            const method = dY < 0 ? "max" : "min";
            if (el.scrollHeight <= el.clientHeight) {
              return;
            }
            if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
              e.preventDefault();
              reactDom$1.flushSync(() => {
                onChangeRef.current((d) => d + Math[method](dY, remainingScroll * sign));
              });
            } else if (/firefox/i.test(getUserAgent())) {
              el.scrollTop += dY;
            }
          }
          __name(onWheel, "onWheel");
          const el = refs.floating.current;
          if (open && el) {
            el.addEventListener("wheel", onWheel);
            requestAnimationFrame(() => {
              prevScrollTopRef.current = el.scrollTop;
              if (overflowRef.current != null) {
                initialOverflowRef.current = {
                  ...overflowRef.current
                };
              }
            });
            return () => {
              prevScrollTopRef.current = null;
              initialOverflowRef.current = null;
              el.removeEventListener("wheel", onWheel);
            };
          }
        }, [enabled, open, refs, overflowRef, onChangeRef]);
        if (!enabled) {
          return {};
        }
        return {
          floating: {
            onKeyDown() {
              controlledScrollingRef.current = true;
            },
            onWheel() {
              controlledScrollingRef.current = false;
            },
            onPointerMove() {
              controlledScrollingRef.current = false;
            },
            onScroll() {
              const el = refs.floating.current;
              if (!overflowRef.current || !el || !controlledScrollingRef.current) {
                return;
              }
              if (prevScrollTopRef.current !== null) {
                const scrollDiff = el.scrollTop - prevScrollTopRef.current;
                if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
                  reactDom$1.flushSync(() => onChange((d) => d + scrollDiff));
                }
              }
              requestAnimationFrame(() => {
                prevScrollTopRef.current = el.scrollTop;
              });
            }
          }
        };
      }, "useInnerOffset");
      const useRole2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open
        } = _ref;
        let {
          enabled = true,
          role = "dialog"
        } = _temp === void 0 ? {} : _temp;
        const rootId = useId();
        const referenceId = useId();
        const floatingProps = {
          id: rootId,
          role
        };
        if (!enabled) {
          return {};
        }
        if (role === "tooltip") {
          return {
            reference: {
              "aria-describedby": open ? rootId : void 0
            },
            floating: floatingProps
          };
        }
        return {
          reference: {
            "aria-expanded": open ? "true" : "false",
            "aria-haspopup": role,
            "aria-controls": open ? rootId : void 0,
            ...role === "listbox" && {
              role: "combobox"
            },
            ...role === "menu" && {
              id: referenceId
            }
          },
          floating: {
            ...floatingProps,
            ...role === "menu" && {
              "aria-labelledby": referenceId
            }
          }
        };
      }, "useRole");
      const useClick = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          dataRef,
          refs
        } = _ref;
        let {
          enabled = true,
          pointerDown = false,
          toggle = true,
          ignoreMouse = false
        } = _temp === void 0 ? {} : _temp;
        const pointerTypeRef = React__namespace.useRef();
        function isButton() {
          var _refs$domReference$cu;
          return ((_refs$domReference$cu = refs.domReference.current) == null ? void 0 : _refs$domReference$cu.tagName) === "BUTTON";
        }
        __name(isButton, "isButton");
        function isSpaceIgnored() {
          return isTypeableElement(refs.domReference.current);
        }
        __name(isSpaceIgnored, "isSpaceIgnored");
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown(event) {
              pointerTypeRef.current = event.pointerType;
            },
            onMouseDown(event) {
              if (event.button !== 0) {
                return;
              }
              if (pointerTypeRef.current === "mouse" && ignoreMouse) {
                return;
              }
              if (!pointerDown) {
                return;
              }
              if (open) {
                if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
                  onOpenChange(false);
                }
              } else {
                onOpenChange(true);
              }
              dataRef.current.openEvent = event.nativeEvent;
            },
            onClick(event) {
              if (pointerDown && pointerTypeRef.current) {
                pointerTypeRef.current = void 0;
                return;
              }
              if (pointerTypeRef.current === "mouse" && ignoreMouse) {
                return;
              }
              if (open) {
                if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
                  onOpenChange(false);
                }
              } else {
                onOpenChange(true);
              }
              dataRef.current.openEvent = event.nativeEvent;
            },
            onKeyDown(event) {
              pointerTypeRef.current = void 0;
              if (isButton()) {
                return;
              }
              if (event.key === " " && !isSpaceIgnored()) {
                event.preventDefault();
              }
              if (event.key === "Enter") {
                if (open) {
                  if (toggle) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
              }
            },
            onKeyUp(event) {
              if (isButton() || isSpaceIgnored()) {
                return;
              }
              if (event.key === " ") {
                if (open) {
                  if (toggle) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
              }
            }
          }
        };
      }, "useClick");
      function isEventTargetWithin(event, node) {
        if (node == null) {
          return false;
        }
        if ("composedPath" in event) {
          return event.composedPath().includes(node);
        }
        const e = event;
        return e.target != null && node.contains(e.target);
      }
      __name(isEventTargetWithin, "isEventTargetWithin");
      const useDismiss2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          refs,
          events,
          nodeId
        } = _ref;
        let {
          enabled = true,
          escapeKey = true,
          outsidePointerDown = true,
          referencePointerDown = false,
          ancestorScroll = false,
          bubbles = true
        } = _temp === void 0 ? {} : _temp;
        const tree = useFloatingTree();
        const onOpenChangeRef = useLatestRef(onOpenChange);
        const nested = useFloatingParentNodeId() != null;
        React__namespace.useEffect(() => {
          if (!open || !enabled) {
            return;
          }
          function onKeyDown(event) {
            if (event.key === "Escape") {
              if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
                return;
              }
              events.emit("dismiss", {
                preventScroll: false
              });
              onOpenChangeRef.current(false);
            }
          }
          __name(onKeyDown, "onKeyDown");
          function onPointerDown(event) {
            const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
              var _node$context;
              return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.refs.floating.current);
            });
            if (isEventTargetWithin(event, refs.floating.current) || isEventTargetWithin(event, refs.domReference.current) || targetIsInsideChildren) {
              return;
            }
            if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
              return;
            }
            events.emit("dismiss", nested ? {
              preventScroll: true
            } : false);
            onOpenChangeRef.current(false);
          }
          __name(onPointerDown, "onPointerDown");
          function onScroll() {
            onOpenChangeRef.current(false);
          }
          __name(onScroll, "onScroll");
          const doc = getDocument(refs.floating.current);
          escapeKey && doc.addEventListener("keydown", onKeyDown);
          outsidePointerDown && doc.addEventListener("pointerdown", onPointerDown);
          const ancestors = (ancestorScroll ? [...isElement(refs.reference.current) ? reactDom.getOverflowAncestors(refs.reference.current) : [], ...isElement(refs.floating.current) ? reactDom.getOverflowAncestors(refs.floating.current) : []] : []).filter((ancestor) => {
            var _doc$defaultView;
            return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
          });
          ancestors.forEach((ancestor) => ancestor.addEventListener("scroll", onScroll, {
            passive: true
          }));
          return () => {
            escapeKey && doc.removeEventListener("keydown", onKeyDown);
            outsidePointerDown && doc.removeEventListener("pointerdown", onPointerDown);
            ancestors.forEach((ancestor) => ancestor.removeEventListener("scroll", onScroll));
          };
        }, [escapeKey, outsidePointerDown, events, tree, nodeId, open, onOpenChangeRef, ancestorScroll, enabled, bubbles, refs, nested]);
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown() {
              if (referencePointerDown) {
                events.emit("dismiss");
                onOpenChange(false);
              }
            }
          }
        };
      }, "useDismiss");
      const useFocus2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          dataRef,
          refs,
          events
        } = _ref;
        let {
          enabled = true,
          keyboardOnly = true
        } = _temp === void 0 ? {} : _temp;
        const pointerTypeRef = React__namespace.useRef("");
        const blockFocusRef = React__namespace.useRef(false);
        React__namespace.useEffect(() => {
          var _doc$defaultView;
          if (!enabled) {
            return;
          }
          const doc = getDocument(refs.floating.current);
          const win = (_doc$defaultView = doc.defaultView) != null ? _doc$defaultView : window;
          function onBlur() {
            if (pointerTypeRef.current && refs.domReference.current === activeElement(doc)) {
              blockFocusRef.current = !open;
            }
          }
          __name(onBlur, "onBlur");
          function onFocus() {
            setTimeout(() => {
              blockFocusRef.current = false;
              pointerTypeRef.current = "";
            });
          }
          __name(onFocus, "onFocus");
          win.addEventListener("focus", onFocus);
          win.addEventListener("blur", onBlur);
          return () => {
            win.removeEventListener("focus", onFocus);
            win.removeEventListener("blur", onBlur);
          };
        }, [refs, open, enabled]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onDismiss() {
            blockFocusRef.current = true;
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
          };
        }, [events, enabled]);
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown(_ref2) {
              let {
                pointerType
              } = _ref2;
              pointerTypeRef.current = pointerType;
              blockFocusRef.current = !!(pointerType && keyboardOnly);
            },
            onFocus(event) {
              var _dataRef$current$open, _refs$domReference$cu, _dataRef$current$open2;
              if (blockFocusRef.current) {
                return;
              }
              if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains((_dataRef$current$open2 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open2.target)) {
                return;
              }
              dataRef.current.openEvent = event.nativeEvent;
              onOpenChange(true);
            },
            onBlur(event) {
              var _refs$floating$curren, _refs$domReference$cu2;
              const target = event.relatedTarget;
              if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) || (_refs$domReference$cu2 = refs.domReference.current) != null && _refs$domReference$cu2.contains(target)) {
                return;
              }
              blockFocusRef.current = false;
              onOpenChange(false);
            }
          }
        };
      }, "useFocus");
      const ARROW_UP = "ArrowUp";
      const ARROW_DOWN = "ArrowDown";
      const ARROW_LEFT = "ArrowLeft";
      const ARROW_RIGHT = "ArrowRight";
      function isIndexOutOfBounds(listRef, index2) {
        return index2 < 0 || index2 >= listRef.current.length;
      }
      __name(isIndexOutOfBounds, "isIndexOutOfBounds");
      function findNonDisabledIndex(listRef, _temp) {
        let {
          startingIndex = -1,
          decrement = false,
          disabledIndices
        } = _temp === void 0 ? {} : _temp;
        const list = listRef.current;
        let index2 = startingIndex;
        do {
          var _list$index, _list$index2;
          index2 = index2 + (decrement ? -1 : 1);
        } while (index2 >= 0 && index2 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index2) : list[index2] == null || ((_list$index = list[index2]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index2]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
        return index2;
      }
      __name(findNonDisabledIndex, "findNonDisabledIndex");
      function doSwitch(orientation, vertical, horizontal) {
        switch (orientation) {
          case "vertical":
            return vertical;
          case "horizontal":
            return horizontal;
          default:
            return vertical || horizontal;
        }
      }
      __name(doSwitch, "doSwitch");
      function isMainOrientationKey(key, orientation) {
        const vertical = key === ARROW_UP || key === ARROW_DOWN;
        const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isMainOrientationKey, "isMainOrientationKey");
      function isMainOrientationToEndKey(key, orientation, rtl) {
        const vertical = key === ARROW_DOWN;
        const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
        return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
      }
      __name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
      function isCrossOrientationOpenKey(key, orientation, rtl) {
        const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
        const horizontal = key === ARROW_DOWN;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
      function isCrossOrientationCloseKey(key, orientation, rtl) {
        const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
        const horizontal = key === ARROW_UP;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
      function getMinIndex(listRef, disabledIndices) {
        return findNonDisabledIndex(listRef, {
          disabledIndices
        });
      }
      __name(getMinIndex, "getMinIndex");
      function getMaxIndex(listRef, disabledIndices) {
        return findNonDisabledIndex(listRef, {
          decrement: true,
          startingIndex: listRef.current.length,
          disabledIndices
        });
      }
      __name(getMaxIndex, "getMaxIndex");
      const useListNavigation = /* @__PURE__ */ __name(function(_ref, _temp2) {
        let {
          open,
          onOpenChange,
          refs
        } = _ref;
        let {
          listRef,
          activeIndex,
          onNavigate,
          enabled = true,
          selectedIndex = null,
          allowEscape = false,
          loop = false,
          nested = false,
          rtl = false,
          virtual = false,
          focusItemOnOpen = "auto",
          focusItemOnHover = true,
          openOnArrowKeyDown = true,
          disabledIndices = openOnArrowKeyDown ? void 0 : [],
          orientation = "vertical"
        } = _temp2 === void 0 ? {
          listRef: {
            current: []
          },
          activeIndex: null,
          onNavigate: () => {
          }
        } : _temp2;
        if (process.env.NODE_ENV !== "production") {
          if (allowEscape) {
            if (!loop) {
              console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
            }
            if (!virtual) {
              console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
            }
          }
        }
        const parentId = useFloatingParentNodeId();
        const tree = useFloatingTree();
        const previousOpen = usePrevious(open);
        const focusItemOnOpenRef = React__namespace.useRef(focusItemOnOpen);
        const indexRef = React__namespace.useRef(selectedIndex != null ? selectedIndex : -1);
        const keyRef = React__namespace.useRef(null);
        const previousOnNavigateRef = useLatestRef(usePrevious(onNavigate));
        const onNavigateRef = useLatestRef(onNavigate);
        const disabledIndicesRef = useLatestRef(disabledIndices);
        const blockPointerLeaveRef = React__namespace.useRef(false);
        const frameRef = React__namespace.useRef(-1);
        const [activeId, setActiveId] = React__namespace.useState();
        const focusItem = React__namespace.useCallback((listRef2, indexRef2) => {
          frameRef.current = requestAnimationFrame(() => {
            if (virtual) {
              var _listRef$current$inde;
              setActiveId((_listRef$current$inde = listRef2.current[indexRef2.current]) == null ? void 0 : _listRef$current$inde.id);
            } else {
              var _listRef$current$inde2;
              (_listRef$current$inde2 = listRef2.current[indexRef2.current]) == null ? void 0 : _listRef$current$inde2.focus({
                preventScroll: true
              });
            }
          });
        }, [virtual]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (!previousOpen && open && focusItemOnOpenRef.current && selectedIndex != null) {
            onNavigateRef.current(selectedIndex);
          }
          if (previousOpen && !open) {
            cancelAnimationFrame(frameRef.current);
            indexRef.current = -1;
            previousOnNavigateRef.current == null ? void 0 : previousOnNavigateRef.current(null);
          }
        }, [open, previousOpen, selectedIndex, listRef, onNavigateRef, previousOnNavigateRef, focusItem, enabled]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open) {
            if (activeIndex == null) {
              if (selectedIndex != null) {
                return;
              }
              if (previousOpen) {
                indexRef.current = -1;
                focusItem(listRef, indexRef);
              }
              if (!previousOpen && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
                onNavigateRef.current(indexRef.current);
                focusItem(listRef, indexRef);
              }
            } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
              indexRef.current = activeIndex;
              focusItem(listRef, indexRef);
            }
          }
        }, [open, previousOpen, activeIndex, selectedIndex, nested, listRef, onNavigateRef, focusItem, enabled, allowEscape, orientation, rtl, virtual, disabledIndicesRef]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (!open && previousOpen) {
            var _tree$nodesRef$curren, _tree$nodesRef$curren2;
            const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
            if (parentFloating && !parentFloating.contains(activeElement(getDocument(parentFloating)))) {
              parentFloating.focus({
                preventScroll: true
              });
            }
          }
        }, [enabled, open, previousOpen, tree, parentId]);
        index(() => {
          keyRef.current = null;
        });
        function onKeyDown(event) {
          blockPointerLeaveRef.current = true;
          if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
            stopEvent(event);
            onOpenChange(false);
            if (isHTMLElement(refs.domReference.current)) {
              refs.domReference.current.focus();
            }
            return;
          }
          const currentIndex = indexRef.current;
          const minIndex = getMinIndex(listRef, disabledIndices);
          const maxIndex = getMaxIndex(listRef, disabledIndices);
          if (event.key === "Home") {
            indexRef.current = minIndex;
            onNavigate(indexRef.current);
          }
          if (event.key === "End") {
            indexRef.current = maxIndex;
            onNavigate(indexRef.current);
          }
          if (isMainOrientationKey(event.key, orientation)) {
            stopEvent(event);
            if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
              indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
              onNavigate(indexRef.current);
              return;
            }
            if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
              if (loop) {
                indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  disabledIndices
                });
              } else {
                indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  disabledIndices
                }));
              }
            } else {
              if (loop) {
                indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  decrement: true,
                  disabledIndices
                });
              } else {
                indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  decrement: true,
                  disabledIndices
                }));
              }
            }
            if (isIndexOutOfBounds(listRef, indexRef.current)) {
              onNavigate(null);
            } else {
              onNavigate(indexRef.current);
            }
          }
        }
        __name(onKeyDown, "onKeyDown");
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            ...virtual && open && activeIndex != null && {
              "aria-activedescendant": activeId
            },
            onKeyDown(event) {
              blockPointerLeaveRef.current = true;
              if (virtual && open) {
                return onKeyDown(event);
              }
              const isNavigationKey = event.key.indexOf("Arrow") === 0 || event.key === "Enter" || event.key === " " || event.key === "";
              if (isNavigationKey) {
                keyRef.current = event.key;
              }
              if (nested) {
                if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
                  stopEvent(event);
                  if (open) {
                    indexRef.current = getMinIndex(listRef, disabledIndices);
                    onNavigate(indexRef.current);
                  } else {
                    onOpenChange(true);
                  }
                }
                return;
              }
              if (isMainOrientationKey(event.key, orientation)) {
                if (selectedIndex != null) {
                  indexRef.current = selectedIndex;
                }
                stopEvent(event);
                if (!open && openOnArrowKeyDown) {
                  onOpenChange(true);
                } else {
                  onKeyDown(event);
                }
                if (open) {
                  onNavigate(indexRef.current);
                }
              }
            }
          },
          floating: {
            "aria-orientation": orientation === "both" ? void 0 : orientation,
            ...virtual && activeIndex != null && {
              "aria-activedescendant": activeId
            },
            onKeyDown,
            onPointerMove() {
              blockPointerLeaveRef.current = false;
            }
          },
          item: {
            onFocus(_ref2) {
              let {
                currentTarget
              } = _ref2;
              const index2 = listRef.current.indexOf(currentTarget);
              if (index2 !== -1) {
                onNavigate(index2);
              }
            },
            onClick: (_ref3) => {
              let {
                currentTarget
              } = _ref3;
              return currentTarget.focus({
                preventScroll: true
              });
            },
            ...focusItemOnHover && {
              onMouseMove(_ref4) {
                let {
                  currentTarget
                } = _ref4;
                const target = currentTarget;
                if (target) {
                  const index2 = listRef.current.indexOf(target);
                  if (index2 !== -1) {
                    onNavigate(index2);
                  }
                }
              },
              onPointerLeave() {
                if (!blockPointerLeaveRef.current) {
                  indexRef.current = -1;
                  focusItem(listRef, indexRef);
                  onNavigateRef.current(null);
                  if (!virtual) {
                    var _refs$floating$curren;
                    (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
                      preventScroll: true
                    });
                  }
                }
              }
            }
          }
        };
      }, "useListNavigation");
      const useTypeahead = /* @__PURE__ */ __name(function(_ref, _temp) {
        var _ref2;
        let {
          open,
          dataRef
        } = _ref;
        let {
          listRef,
          activeIndex,
          onMatch = /* @__PURE__ */ __name(() => {
          }, "onMatch"),
          enabled = true,
          findMatch = null,
          resetMs = 1e3,
          ignoreKeys = [],
          selectedIndex = null
        } = _temp === void 0 ? {
          listRef: {
            current: []
          },
          activeIndex: null
        } : _temp;
        const timeoutIdRef = React__namespace.useRef();
        const stringRef = React__namespace.useRef("");
        const prevIndexRef = React__namespace.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
        const matchIndexRef = React__namespace.useRef(null);
        index(() => {
          if (open) {
            clearTimeout(timeoutIdRef.current);
            matchIndexRef.current = null;
            stringRef.current = "";
          }
        }, [open]);
        index(() => {
          if (open && stringRef.current === "") {
            var _ref3;
            prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
          }
        }, [open, selectedIndex, activeIndex]);
        function onKeyDown(event) {
          if (!event.currentTarget.contains(activeElement(getDocument(event.currentTarget)))) {
            return;
          }
          if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
            dataRef.current.typing = true;
            if (event.key === " ") {
              stopEvent(event);
            }
          }
          const listContent = listRef.current;
          if (listContent == null || ["Home", "End", "Escape", "Enter", "Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", ...ignoreKeys].includes(event.key)) {
            return;
          }
          const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
            var _text$, _text$2;
            return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
          });
          if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
            stringRef.current = "";
            prevIndexRef.current = matchIndexRef.current;
          }
          stringRef.current += event.key;
          clearTimeout(timeoutIdRef.current);
          timeoutIdRef.current = setTimeout(() => {
            stringRef.current = "";
            prevIndexRef.current = matchIndexRef.current;
            dataRef.current.typing = false;
          }, resetMs);
          const prevIndex = prevIndexRef.current;
          const orderedList = [...listContent.slice((prevIndex != null ? prevIndex : 0) + 1), ...listContent.slice(0, (prevIndex != null ? prevIndex : 0) + 1)];
          const str = findMatch ? findMatch(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current)) === 0);
          const index2 = str ? listContent.indexOf(str) : -1;
          if (index2 !== -1) {
            onMatch(index2);
            matchIndexRef.current = index2;
          }
        }
        __name(onKeyDown, "onKeyDown");
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onKeyDown
          },
          floating: {
            onKeyDown
          }
        };
      }, "useTypeahead");
      exports2.FloatingDelayGroup = FloatingDelayGroup;
      exports2.FloatingFocusManager = FloatingFocusManager;
      exports2.FloatingNode = FloatingNode;
      exports2.FloatingOverlay = FloatingOverlay;
      exports2.FloatingPortal = FloatingPortal;
      exports2.FloatingTree = FloatingTree;
      exports2.inner = inner;
      exports2.safePolygon = safePolygon;
      exports2.useClick = useClick;
      exports2.useDelayGroup = useDelayGroup;
      exports2.useDelayGroupContext = useDelayGroupContext;
      exports2.useDismiss = useDismiss2;
      exports2.useFloating = useFloating2;
      exports2.useFloatingNodeId = useFloatingNodeId;
      exports2.useFloatingParentNodeId = useFloatingParentNodeId;
      exports2.useFloatingPortalNode = useFloatingPortalNode;
      exports2.useFloatingTree = useFloatingTree;
      exports2.useFocus = useFocus2;
      exports2.useHover = useHover;
      exports2.useId = useId;
      exports2.useInnerOffset = useInnerOffset;
      exports2.useInteractions = useInteractions2;
      exports2.useListNavigation = useListNavigation;
      exports2.useRole = useRole2;
      exports2.useTypeahead = useTypeahead;
      Object.keys(reactDom).forEach(function(k) {
        if (k !== "default" && !exports2.hasOwnProperty(k))
          Object.defineProperty(exports2, k, {
            enumerable: true,
            get: function() {
              return reactDom[k];
            }
          });
      });
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/floating.js
var require_floating2 = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/floating.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var floating_exports = {};
    __export2(floating_exports, {
      useDismiss: () => import_react_dom_interactions.useDismiss,
      useFloating: () => import_react_dom_interactions.useFloating,
      useFocus: () => import_react_dom_interactions.useFocus,
      useInteractions: () => import_react_dom_interactions.useInteractions,
      useRole: () => import_react_dom_interactions.useRole
    });
    module2.exports = __toCommonJS2(floating_exports);
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/Popover.js
var require_Popover = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/Popover.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popover_exports = {};
    __export2(Popover_exports, {
      Popover: () => Popover,
      PopoverAnchor: () => PopoverAnchor,
      PopoverArrow: () => PopoverArrow,
      PopoverClose: () => PopoverClose,
      PopoverContent: () => PopoverContent,
      PopoverSheetContents: () => PopoverSheetContents,
      PopoverTrigger: () => PopoverTrigger,
      __PopoverProviderInternal: () => __PopoverProviderInternal,
      createPopoverScope: () => createPopoverScope,
      usePopoverScope: () => usePopoverScope
    });
    module2.exports = __toCommonJS2(Popover_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_animate_presence = require_cjs();
    var import_aria_hidden = require_cjs4();
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_focus_scope = require_cjs7();
    var import_popper = require_cjs29();
    var import_portal = require_cjs9();
    var import_remove_scroll = require_cjs10();
    var import_sheet = require_cjs13();
    var import_stacks = require_cjs8();
    var import_use_controllable_state = require_cjs11();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var import_floating = require_floating2();
    var POPOVER_NAME = "Popover";
    var [createPopoverContext, createPopoverScopeInternal] = (0, import_create_context.createContextScope)(POPOVER_NAME, [
      import_popper.createPopperScope
    ]);
    var usePopoverScope = (0, import_popper.createPopperScope)();
    var createPopoverScope = createPopoverScopeInternal;
    var [PopoverProviderInternal, usePopoverInternalContext] = createPopoverContext(POPOVER_NAME);
    var __PopoverProviderInternal = PopoverProviderInternal;
    var ANCHOR_NAME = "PopoverAnchor";
    var PopoverAnchor = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...anchorProps } = props;
        const context = usePopoverInternalContext(ANCHOR_NAME, __scopePopover);
        const popperScope = usePopoverScope(__scopePopover);
        const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
        React3.useEffect(() => {
          onCustomAnchorAdd();
          return () => onCustomAnchorRemove();
        }, [onCustomAnchorAdd, onCustomAnchorRemove]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
          ...popperScope,
          ...anchorProps,
          ref: forwardedRef
        });
      }
    );
    PopoverAnchor.displayName = ANCHOR_NAME;
    var TRIGGER_NAME = "PopoverTrigger";
    var PopoverTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...triggerProps } = props;
        const context = usePopoverInternalContext(TRIGGER_NAME, __scopePopover);
        const popperScope = usePopoverScope(__scopePopover);
        const composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.triggerRef);
        const trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "data-state": getState(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onPress: (0, import_core4.composeEventHandlers)(props.onPress, context.onOpenToggle)
        });
        return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
          asChild: true,
          ...popperScope,
          children: trigger
        });
      }
    );
    PopoverTrigger.displayName = TRIGGER_NAME;
    var CONTENT_NAME = "PopoverContent";
    var PopoverContent = React3.forwardRef(
      (props, forwardedRef) => {
        const { allowPinchZoom, trapFocus, disableRemoveScroll = true, ...contentModalProps } = props;
        const context = usePopoverInternalContext(CONTENT_NAME, props.__scopePopover);
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef);
        const isRightClickOutsideRef = React3.useRef(false);
        const themeName = (0, import_core4.useThemeName)();
        React3.useEffect(() => {
          if (!context.open)
            return;
          const content = contentRef.current;
          if (content)
            return (0, import_aria_hidden.hideOthers)(content);
        }, [context.open]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.Portal, {
          zIndex: props.zIndex ?? 1e3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Theme, {
            name: themeName,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
              ...contentModalProps,
              disableRemoveScroll,
              ref: composedRefs,
              trapFocus: trapFocus ?? context.open,
              disableOutsidePointerEvents: true,
              onCloseAutoFocus: (0, import_core4.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
                var _a;
                event.preventDefault();
                if (!isRightClickOutsideRef.current)
                  (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
              }),
              onPointerDownOutside: (0, import_core4.composeEventHandlers)(
                props.onPointerDownOutside,
                (event) => {
                  const originalEvent = event.detail.originalEvent;
                  const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                  const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                  isRightClickOutsideRef.current = isRightClick;
                },
                { checkDefaultPrevented: false }
              ),
              onFocusOutside: (0, import_core4.composeEventHandlers)(
                props.onFocusOutside,
                (event) => event.preventDefault(),
                { checkDefaultPrevented: false }
              )
            })
          })
        });
      }
    );
    var PopoverContentImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopePopover,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          children,
          disableRemoveScroll,
          ...contentProps
        } = props;
        const popperScope = usePopoverScope(__scopePopover);
        const context = usePopoverInternalContext(CONTENT_NAME, popperScope.__scopePopover);
        const showSheet = useShowPopoverSheet(context);
        if (showSheet) {
          const childrenWithoutScrollView = React3.Children.toArray(children).map((child) => {
            if (React3.isValidElement(child)) {
              if (child.type === PopoverScrollView) {
                return child.props.children;
              }
            }
            return child;
          });
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: childrenWithoutScrollView
          });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
          children: !!context.open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperContent, {
            "data-state": getState(context.open),
            id: context.contentId,
            pointerEvents: "auto",
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
              enabled: disableRemoveScroll ? false : context.open,
              allowPinchZoom: true,
              removeScrollBar: false,
              style: {
                display: "contents"
              },
              children: trapFocus === false ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
                loop: true,
                trapped: trapFocus ?? context.open,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  style: { display: "contents" },
                  children
                })
              })
            })
          }, "popper-content")
        });
      }
    );
    var CLOSE_NAME = "PopoverClose";
    var PopoverClose = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...closeProps } = props;
        const context = usePopoverInternalContext(CLOSE_NAME, __scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          ...closeProps,
          ref: forwardedRef,
          onPress: (0, import_core4.composeEventHandlers)(props.onPress, () => context.onOpenChange(false))
        });
      }
    );
    PopoverClose.displayName = CLOSE_NAME;
    var ARROW_NAME = "PopoverArrow";
    var PopoverArrow = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...arrowProps } = props;
        const popperScope = usePopoverScope(__scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperArrow, {
          ...popperScope,
          ...arrowProps,
          ref: forwardedRef
        });
      }
    );
    PopoverArrow.displayName = ARROW_NAME;
    var SHEET_CONTENTS_NAME = "PopoverSheetContents";
    var PopoverSheetContents = /* @__PURE__ */ __name(({ __scopePopover }) => {
      const context = usePopoverInternalContext(SHEET_CONTENTS_NAME, __scopePopover);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
        name: `${context.scopeKey}SheetContents`
      });
    }, "PopoverSheetContents");
    PopoverSheetContents.displayName = SHEET_CONTENTS_NAME;
    var PopoverScrollView = React3.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native3.ScrollView, {
        ref,
        ...props
      });
    });
    var Popover = (0, import_core4.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          sheetBreakpoint = false,
          ...restProps
        } = props;
        const popperScope = usePopoverScope(__scopePopover);
        const triggerRef = React3.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React3.useState(false);
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange
        });
        const breakpointActive = useSheetBreakpointActive(sheetBreakpoint);
        const useFloatingContext = React3.useCallback(
          (props2) => {
            const floating = (0, import_floating.useFloating)({
              ...props2,
              open,
              onOpenChange: setOpen
            });
            const { getReferenceProps, getFloatingProps } = (0, import_floating.useInteractions)([
              (0, import_floating.useFocus)(floating.context, {
                enabled: !breakpointActive
              }),
              (0, import_floating.useRole)(floating.context, { role: "dialog" }),
              (0, import_floating.useDismiss)(floating.context, {
                enabled: !breakpointActive
              })
            ]);
            return {
              ...floating,
              getReferenceProps,
              getFloatingProps
            };
          },
          [breakpointActive, open, setOpen]
        );
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.FloatingOverrideContext.Provider, {
          value: useFloatingContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.Popper, {
            ...popperScope,
            stayInFrame: true,
            ...restProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverProviderInternal, {
              scope: __scopePopover,
              scopeKey: __scopePopover ? Object.keys(__scopePopover)[0] : "",
              sheetBreakpoint,
              contentId: (0, import_core4.useId)(),
              triggerRef,
              open,
              onOpenChange: setOpen,
              onOpenToggle: (0, import_core4.useEvent)(() => {
                if (open && breakpointActive) {
                  return;
                }
                setOpen(!open);
              }),
              hasCustomAnchor,
              onCustomAnchorAdd: React3.useCallback(() => setHasCustomAnchor(true), []),
              onCustomAnchorRemove: React3.useCallback(() => setHasCustomAnchor(false), []),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverSheetController, {
                onOpenChange: setOpen,
                __scopePopover,
                children
              })
            })
          })
        });
      },
      {
        Anchor: PopoverAnchor,
        Arrow: PopoverArrow,
        Trigger: PopoverTrigger,
        Content: PopoverContent,
        Close: PopoverClose,
        SheetContents: PopoverSheetContents,
        ScrollView: PopoverScrollView,
        Sheet: import_sheet.ControlledSheet
      }
    );
    Popover.displayName = POPOVER_NAME;
    function getState(open) {
      return open ? "open" : "closed";
    }
    __name(getState, "getState");
    var PopoverSheetController = /* @__PURE__ */ __name((props) => {
      const context = usePopoverInternalContext("PopoverSheetController", props.__scopePopover);
      const showSheet = useShowPopoverSheet(context);
      const breakpointActive = useSheetBreakpointActive(context.sheetBreakpoint);
      const getShowSheet = (0, import_core4.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sheet.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "PopoverSheetController");
    var useSheetBreakpointActive = /* @__PURE__ */ __name((breakpoint) => {
      const media = (0, import_core4.useMedia)();
      return breakpoint ? media[breakpoint] : false;
    }, "useSheetBreakpointActive");
    var useShowPopoverSheet = /* @__PURE__ */ __name((context) => {
      if (!import_core4.isWeb)
        return true;
      const breakpointActive = useSheetBreakpointActive(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowPopoverSheet");
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/index.js
var require_cjs30 = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Popover(), module2.exports);
  }
});

// ../../node_modules/@tamagui/progress/dist/cjs/Progress.js
var require_Progress = __commonJS({
  "../../node_modules/@tamagui/progress/dist/cjs/Progress.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Progress_exports = {};
    __export2(Progress_exports, {
      Progress: () => Progress,
      ProgressFrame: () => ProgressFrame,
      ProgressIndicator: () => ProgressIndicator,
      ProgressIndicatorFrame: () => ProgressIndicatorFrame,
      createProgressScope: () => createProgressScope
    });
    module2.exports = __toCommonJS2(Progress_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var PROGRESS_NAME = "Progress";
    var [createProgressContext, createProgressScope] = (0, import_create_context.createContextScope)(PROGRESS_NAME);
    var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
    var INDICATOR_NAME = "ProgressIndicator";
    var ProgressIndicatorFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: INDICATOR_NAME,
      height: "100%",
      width: "100%",
      backgrounded: true
    });
    var ProgressIndicator = ProgressIndicatorFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopeProgress, ...indicatorProps } = props;
          const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
          const pct = context.max - (context.value ?? 0);
          const x = -context.width * (pct / 100);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicatorFrame, {
            "data-state": getProgressState(context.value, context.max),
            "data-value": context.value ?? void 0,
            "data-max": context.max,
            x,
            width: context.width,
            ...indicatorProps,
            ref: forwardedRef
          });
        }
      )
    );
    ProgressIndicator.displayName = INDICATOR_NAME;
    function defaultGetValueLabel(value, max) {
      return `${Math.round(value / max * 100)}%`;
    }
    __name(defaultGetValueLabel, "defaultGetValueLabel");
    function getProgressState(value, maxValue) {
      return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
    }
    __name(getProgressState, "getProgressState");
    function isNumber(value) {
      return typeof value === "number";
    }
    __name(isNumber, "isNumber");
    function isValidMaxNumber(max) {
      return isNumber(max) && !isNaN(max) && max > 0;
    }
    __name(isValidMaxNumber, "isValidMaxNumber");
    function isValidValueNumber(value, max) {
      return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
    }
    __name(isValidValueNumber, "isValidValueNumber");
    function getInvalidMaxError(propValue, componentName) {
      return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
    }
    __name(getInvalidMaxError, "getInvalidMaxError");
    function getInvalidValueError(propValue, componentName) {
      return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
    }
    __name(getInvalidValueError, "getInvalidValueError");
    var DEFAULT_MAX = 100;
    var ProgressFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: PROGRESS_NAME,
      borderRadius: 1e5,
      overflow: "hidden",
      backgrounded: true,
      variants: {
        size: {
          "...size": (val) => {
            const size2 = Math.round((0, import_core4.getVariableValue)((0, import_core4.getSize)(val)) * 0.25);
            return {
              height: size2,
              minWidth: (0, import_core4.getVariableValue)(size2) * 20,
              width: "100%"
            };
          }
        }
      }
    });
    var Progress = (0, import_core4.withStaticProperties)(
      ProgressFrame.extractable(
        React3.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeProgress,
              value: valueProp,
              max: maxProp,
              getValueLabel = defaultGetValueLabel,
              size: size2 = "$4",
              ...progressProps
            } = props;
            const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
            const value = isValidValueNumber(valueProp, max) ? valueProp : null;
            const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
            const [width, setWidth] = React3.useState(0);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
              scope: __scopeProgress,
              value,
              max,
              width,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressFrame, {
                size: size2,
                "aria-valuemax": max,
                "aria-valuemin": 0,
                "aria-valuenow": isNumber(value) ? value : void 0,
                "aria-valuetext": valueLabel,
                role: "progressbar",
                "data-state": getProgressState(value, max),
                "data-value": value ?? void 0,
                "data-max": max,
                ...progressProps,
                onLayout: (e) => {
                  var _a;
                  setWidth(e.nativeEvent.layout.width);
                  (_a = progressProps.onLayout) == null ? void 0 : _a.call(progressProps, e);
                },
                ref: forwardedRef
              })
            });
          }
        )
      ),
      {
        Indicator: ProgressIndicator
      }
    );
    Progress.displayName = PROGRESS_NAME;
    Progress.propTypes = {
      max(props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !isValidMaxNumber(propValue)) {
          return new Error(getInvalidMaxError(strVal, componentName));
        }
        return null;
      },
      value(props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max = isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
        if (valueProp != null && !isValidValueNumber(valueProp, max)) {
          return new Error(getInvalidValueError(strVal, componentName));
        }
        return null;
      }
    };
  }
});

// ../../node_modules/@tamagui/progress/dist/cjs/index.js
var require_cjs31 = __commonJS({
  "../../node_modules/@tamagui/progress/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Progress(), module2.exports);
  }
});

// ../../node_modules/@tamagui/separator/dist/cjs/Separator.js
var require_Separator = __commonJS({
  "../../node_modules/@tamagui/separator/dist/cjs/Separator.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Separator_exports = {};
    __export2(Separator_exports, {
      Separator: () => Separator
    });
    module2.exports = __toCommonJS2(Separator_exports);
    var import_core4 = require("@tamagui/core-node");
    var Separator = (0, import_core4.styled)(import_core4.Stack, {
      name: "Separator",
      borderColor: "$borderColor",
      flexShrink: 0,
      borderWidth: 0,
      flex: 1,
      height: 0,
      maxHeight: 0,
      borderBottomWidth: 1,
      y: -0.5,
      variants: {
        vertical: {
          true: {
            y: 0,
            x: -0.5,
            height: import_core4.isWeb ? "initial" : "auto",
            maxHeight: import_core4.isWeb ? "initial" : "auto",
            width: 0,
            maxWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 1
          }
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/separator/dist/cjs/index.js
var require_cjs32 = __commonJS({
  "../../node_modules/@tamagui/separator/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Separator(), module2.exports);
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      FALLBACK_THRESHOLD: () => FALLBACK_THRESHOLD,
      MIN_HEIGHT: () => MIN_HEIGHT,
      SCROLL_ARROW_THRESHOLD: () => SCROLL_ARROW_THRESHOLD,
      SCROLL_ARROW_VELOCITY: () => SCROLL_ARROW_VELOCITY,
      SELECT_NAME: () => SELECT_NAME,
      VIEWPORT_NAME: () => VIEWPORT_NAME,
      WINDOW_PADDING: () => WINDOW_PADDING
    });
    module2.exports = __toCommonJS2(constants_exports);
    var SELECT_NAME = "Select";
    var WINDOW_PADDING = 8;
    var SCROLL_ARROW_VELOCITY = 8;
    var SCROLL_ARROW_THRESHOLD = 8;
    var MIN_HEIGHT = 80;
    var FALLBACK_THRESHOLD = 16;
    var VIEWPORT_NAME = "SelectViewport";
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/context.js
var require_context = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/context.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var context_exports = {};
    __export2(context_exports, {
      ForwardSelectContext: () => ForwardSelectContext,
      SelectProvider: () => SelectProvider,
      createSelectContext: () => createSelectContext,
      createSelectScope: () => createSelectScope,
      useSelectContext: () => useSelectContext
    });
    module2.exports = __toCommonJS2(context_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_create_context = require_cjs3();
    var import_constants = require_constants2();
    var [createSelectContext, createSelectScope] = (0, import_create_context.createContextScope)(import_constants.SELECT_NAME);
    var [SelectProvider, useSelectContext] = createSelectContext(import_constants.SELECT_NAME);
    var ForwardSelectContext = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProvider, {
        isInSheet: true,
        scope: props.__scopeSelect,
        ...props.context,
        children: props.children
      });
    }, "ForwardSelectContext");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js
var require_useSelectBreakpointActive = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useSelectBreakpointActive_exports = {};
    __export2(useSelectBreakpointActive_exports, {
      useSelectBreakpointActive: () => useSelectBreakpointActive,
      useShowSelectSheet: () => useShowSelectSheet
    });
    module2.exports = __toCommonJS2(useSelectBreakpointActive_exports);
    var import_core4 = require("@tamagui/core-node");
    var useSelectBreakpointActive = /* @__PURE__ */ __name((sheetBreakpoint) => {
      const media = (0, import_core4.useMedia)();
      return sheetBreakpoint ? media[sheetBreakpoint] : false;
    }, "useSelectBreakpointActive");
    var useShowSelectSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowSelectSheet");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectContent.js
var require_SelectContent = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectContent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectContent_exports = {};
    __export2(SelectContent_exports, {
      SelectContent: () => SelectContent
    });
    module2.exports = __toCommonJS2(SelectContent_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core4 = require("@tamagui/core-node");
    var import_dismissable = require_cjs6();
    var import_focus_scope = require_cjs7();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var CONTENT_NAME = "SelectContent";
    var SelectContent = /* @__PURE__ */ __name(({
      children,
      __scopeSelect,
      zIndex: zIndex2 = 1e3,
      ...focusScopeProps
    }) => {
      const context = (0, import_context.useSelectContext)(CONTENT_NAME, __scopeSelect);
      const themeName = (0, import_core4.useThemeName)();
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Theme, {
        name: themeName,
        children
      });
      const touch = (0, import_core4.useIsTouchDevice)();
      if (showSheet && context.open) {
        return contents;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_dom_interactions.FloatingPortal, {
        children: context.open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_dom_interactions.FloatingOverlay, {
          style: { zIndex: zIndex2 },
          lockScroll: !touch,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
            loop: true,
            trapped: true,
            ...focusScopeProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
              disableOutsidePointerEvents: true,
              children: contents
            })
          })
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          style: { display: "none" },
          children: contents
        })
      });
    }, "SelectContent");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectImpl.js
var require_SelectImpl = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectImpl.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectImpl_exports = {};
    __export2(SelectImpl_exports, {
      SelectInlineImpl: () => SelectInlineImpl
    });
    module2.exports = __toCommonJS2(SelectImpl_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core4 = require("@tamagui/core-node");
    var React3 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var import_constants = require_constants2();
    var import_context = require_context();
    var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
      const { __scopeSelect, children, open = false, selectedIndexRef, listContentRef } = props;
      const selectContext = (0, import_context.useSelectContext)("SelectSheetImpl", __scopeSelect);
      const { setActiveIndex, setOpen, setSelectedIndex, selectedIndex, activeIndex, forceUpdate } = selectContext;
      const [scrollTop, setScrollTop] = React3.useState(0);
      const touch = (0, import_core4.useIsTouchDevice)();
      const listItemsRef = React3.useRef([]);
      const overflowRef = React3.useRef(null);
      const upArrowRef = React3.useRef(null);
      const downArrowRef = React3.useRef(null);
      const allowSelectRef = React3.useRef(false);
      const allowMouseUpRef = React3.useRef(true);
      const selectTimeoutRef = React3.useRef();
      const state = React3.useRef({
        isMouseOutside: false
      });
      const [controlledScrolling, setControlledScrolling] = React3.useState(false);
      const [fallback, setFallback] = React3.useState(false);
      const [innerOffset, setInnerOffset] = React3.useState(0);
      const [blockSelection, setBlockSelection] = React3.useState(false);
      const floatingStyle = React3.useRef({});
      React3.useEffect(() => {
        const frame = requestAnimationFrame(() => {
          if (!open) {
            setScrollTop(0);
            setFallback(false);
            setActiveIndex(null);
            setControlledScrolling(false);
          }
        });
        return () => {
          cancelAnimationFrame(frame);
        };
      }, [open, setActiveIndex]);
      React3.useEffect(() => {
        if (!open)
          return;
        const mouseUp = /* @__PURE__ */ __name((e) => {
          if (state.current.isMouseOutside) {
            setOpen(false);
          }
        }, "mouseUp");
        document.addEventListener("mouseup", mouseUp);
        return () => {
          document.removeEventListener("mouseup", mouseUp);
        };
      }, [open]);
      const updateFloatingSize = (0, import_react_dom_interactions.size)({
        apply({
          availableHeight,
          rects: {
            reference: { width }
          }
        }) {
          floatingStyle.current = {
            width,
            maxHeight: availableHeight
          };
        },
        padding: import_constants.WINDOW_PADDING
      });
      const { x, y, reference, floating, strategy, context, refs } = (0, import_react_dom_interactions.useFloating)({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: import_react_dom_interactions.autoUpdate,
        placement: "bottom-start",
        middleware: fallback ? [
          (0, import_react_dom_interactions.offset)(5),
          ...[
            touch ? (0, import_react_dom_interactions.shift)({ crossAxis: true, padding: import_constants.WINDOW_PADDING }) : (0, import_react_dom_interactions.flip)({ padding: import_constants.WINDOW_PADDING })
          ],
          updateFloatingSize
        ] : [
          (0, import_react_dom_interactions.inner)({
            listRef: listItemsRef,
            overflowRef,
            index: selectedIndex,
            offset: innerOffset,
            onFallbackChange: setFallback,
            padding: 10,
            minItemsVisible: touch ? 10 : 4,
            referenceOverflowThreshold: 20
          }),
          updateFloatingSize
        ]
      });
      const floatingRef = refs.floating;
      const showUpArrow = open && scrollTop > import_constants.SCROLL_ARROW_THRESHOLD;
      const showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - import_constants.SCROLL_ARROW_THRESHOLD;
      const interactions = (0, import_react_dom_interactions.useInteractions)([
        (0, import_react_dom_interactions.useClick)(context, { pointerDown: true }),
        (0, import_react_dom_interactions.useDismiss)(context, { outsidePointerDown: false }),
        (0, import_react_dom_interactions.useRole)(context, { role: "listbox" }),
        (0, import_react_dom_interactions.useInnerOffset)(context, {
          enabled: !fallback,
          onChange: setInnerOffset,
          overflowRef
        }),
        (0, import_react_dom_interactions.useListNavigation)(context, {
          listRef: listItemsRef,
          activeIndex,
          selectedIndex,
          onNavigate: setActiveIndex
        }),
        (0, import_react_dom_interactions.useTypeahead)(context, {
          listRef: listContentRef,
          onMatch: open ? setActiveIndex : setSelectedIndex,
          selectedIndex,
          activeIndex
        })
      ]);
      const interactionsContext = {
        ...interactions,
        getReferenceProps() {
          return interactions.getReferenceProps({
            ref: reference,
            className: "SelectTrigger",
            onKeyDown(event) {
              if (event.key === "Enter" || event.key === " " && !context.dataRef.current.typing) {
                event.preventDefault();
                setOpen(true);
              }
            }
          });
        },
        getFloatingProps(props2) {
          return interactions.getFloatingProps({
            ref: floating,
            className: "Select",
            ...props2,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
              outline: 0,
              listStyleType: "none",
              scrollbarWidth: "none",
              ...floatingStyle.current,
              ...props2 == null ? void 0 : props2.style
            },
            onPointerEnter() {
              setControlledScrolling(false);
              state.current.isMouseOutside = false;
            },
            onPointerLeave() {
              state.current.isMouseOutside = true;
            },
            onPointerMove() {
              state.current.isMouseOutside = false;
              setControlledScrolling(false);
            },
            onKeyDown() {
              setControlledScrolling(true);
            },
            onContextMenu(e) {
              e.preventDefault();
            },
            onScroll(event) {
              (0, import_react_dom.flushSync)(() => setScrollTop(event.currentTarget.scrollTop));
            }
          });
        }
      };
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        if (open) {
          selectTimeoutRef.current = setTimeout(() => {
            allowSelectRef.current = true;
          }, 300);
          return () => {
            clearTimeout(selectTimeoutRef.current);
          };
        } else {
          allowSelectRef.current = false;
          allowMouseUpRef.current = true;
          setInnerOffset(0);
          setFallback(false);
          setBlockSelection(false);
        }
      }, [open]);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        function onPointerDown(e) {
          var _a, _b, _c;
          const target = e.target;
          if (!((_a = refs.floating.current) == null ? void 0 : _a.contains(target)) && !((_b = upArrowRef.current) == null ? void 0 : _b.contains(target)) && !((_c = downArrowRef.current) == null ? void 0 : _c.contains(target))) {
            setOpen(false);
            setControlledScrolling(false);
          }
        }
        __name(onPointerDown, "onPointerDown");
        if (open) {
          document.addEventListener("pointerdown", onPointerDown);
          return () => {
            document.removeEventListener("pointerdown", onPointerDown);
          };
        }
      }, [open, refs, setOpen]);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        var _a, _b;
        if (open && controlledScrolling) {
          if (activeIndex != null) {
            (_a = listItemsRef.current[activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
        setScrollTop(((_b = refs.floating.current) == null ? void 0 : _b.scrollTop) ?? 0);
      }, [open, refs, controlledScrolling, activeIndex]);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        var _a;
        if (open && fallback) {
          if (selectedIndex != null) {
            (_a = listItemsRef.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
      }, [open, fallback, selectedIndex]);
      (0, import_core4.useIsomorphicLayoutEffect)(() => {
        if (refs.floating.current && fallback) {
          refs.floating.current.style.maxHeight = "";
        }
      }, [refs, fallback]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context.SelectProvider, {
        scope: __scopeSelect,
        ...selectContext,
        setScrollTop,
        setInnerOffset,
        floatingRef,
        setValueAtIndex: (index, value) => {
          listContentRef.current[index] = value;
        },
        fallback,
        interactions: interactionsContext,
        floatingContext: context,
        activeIndex,
        canScrollDown: !!showDownArrow,
        canScrollUp: !!showUpArrow,
        controlledScrolling: true,
        dataRef: context.dataRef,
        listRef: listItemsRef,
        blockSelection,
        allowMouseUpRef,
        upArrowRef,
        downArrowRef,
        selectTimeoutRef,
        allowSelectRef,
        children
      });
    }, "SelectInlineImpl");
    var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js
var require_SelectScrollButton = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectScrollButton_exports = {};
    __export2(SelectScrollButton_exports, {
      SelectScrollDownButton: () => SelectScrollDownButton,
      SelectScrollUpButton: () => SelectScrollUpButton
    });
    module2.exports = __toCommonJS2(SelectScrollButton_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var import_context = require_context();
    var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
    var SelectScrollUpButton = React3.forwardRef(
      (props, forwardedRef) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
          componentName: SCROLL_UP_BUTTON_NAME,
          ...props,
          dir: "up",
          ref: forwardedRef
        });
      }
    );
    SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
    var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
    var SelectScrollDownButton = React3.forwardRef(
      (props, forwardedRef) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
          componentName: SCROLL_DOWN_BUTTON_NAME,
          ...props,
          dir: "down",
          ref: forwardedRef
        });
      }
    );
    SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
    var SelectScrollButtonImpl = React3.memo(
      React3.forwardRef(
        (props, forwardedRef) => {
          var _a;
          const { __scopeSelect, dir, componentName, ...scrollIndicatorProps } = props;
          const { floatingRef, forceUpdate, open, fallback, setScrollTop, setInnerOffset, ...context } = (0, import_context.useSelectContext)(componentName, __scopeSelect);
          const [element, setElement] = React3.useState(null);
          const statusRef = React3.useRef("idle");
          const isVisible = context[dir === "down" ? "canScrollDown" : "canScrollUp"];
          const frameRef = React3.useRef();
          const { x, y, reference, floating, strategy, update, refs } = (0, import_react_dom_interactions.useFloating)({
            strategy: "fixed",
            placement: dir === "up" ? "top" : "bottom",
            middleware: [(0, import_react_dom_interactions.offset)(({ rects }) => -rects.floating.height)],
            whileElementsMounted: (...args) => (0, import_react_dom_interactions.autoUpdate)(...args, { animationFrame: true })
          });
          const composedRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, floating);
          if (floatingRef) {
            if (open) {
              if (element !== floatingRef.current) {
                setElement(floatingRef.current);
                reference(floatingRef.current);
                requestAnimationFrame(update);
              }
            } else {
              cancelAnimationFrame(frameRef.current);
            }
          }
          (0, import_core4.useIsomorphicLayoutEffect)(() => {
            return () => {
              cancelAnimationFrame(frameRef.current);
            };
          }, []);
          if (!isVisible || !floatingRef) {
            return null;
          }
          const onScroll = /* @__PURE__ */ __name((amount) => {
            if (fallback) {
              if (refs.floating.current) {
                refs.floating.current.scrollTop -= amount;
                (0, import_react_dom.flushSync)(() => {
                  var _a2;
                  return setScrollTop(((_a2 = refs.floating.current) == null ? void 0 : _a2.scrollTop) ?? 0);
                });
              }
            } else {
              (0, import_react_dom.flushSync)(() => setInnerOffset((value) => value - amount));
            }
          }, "onScroll");
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
            ref: composedRef,
            componentName,
            "aria-hidden": true,
            ...scrollIndicatorProps,
            zIndex: 1e3,
            position: strategy,
            left: x || 0,
            top: y || 0,
            width: `calc(${(((_a = floatingRef == null ? void 0 : floatingRef.current) == null ? void 0 : _a.offsetWidth) ?? 0) - 2}px)`,
            onPointerEnter: () => {
              statusRef.current = "active";
              let prevNow = Date.now();
              function frame() {
                if (element) {
                  const currentNow = Date.now();
                  const msElapsed = currentNow - prevNow;
                  prevNow = currentNow;
                  const pixelsToScroll = msElapsed / 2;
                  const remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop;
                  const scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
                  onScroll(
                    dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)
                  );
                  if (scrollRemaining) {
                    frameRef.current = requestAnimationFrame(frame);
                  }
                }
              }
              __name(frame, "frame");
              cancelAnimationFrame(frameRef.current);
              frameRef.current = requestAnimationFrame(frame);
            },
            onPointerLeave: () => {
              statusRef.current = "idle";
              cancelAnimationFrame(frameRef.current);
            }
          });
        }
      )
    );
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectViewport.js
var require_SelectViewport = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectViewport.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectViewport_exports = {};
    __export2(SelectViewport_exports, {
      SelectViewport: () => SelectViewport,
      SelectViewportFrame: () => SelectViewportFrame
    });
    module2.exports = __toCommonJS2(SelectViewport_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core4 = require("@tamagui/core-node");
    var import_core22 = require("@tamagui/core-node");
    var import_portal = require_cjs9();
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants2();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var SelectViewportFrame = (0, import_core22.styled)(import_stacks.ThemeableStack, {
      name: import_constants.VIEWPORT_NAME,
      backgroundColor: "$background",
      elevate: true,
      bordered: true,
      overflow: "scroll",
      userSelect: "none",
      variants: {
        size: {
          "...size": (val, { tokens: tokens2 }) => {
            return {
              borderRadius: tokens2.radius[val] ?? val
            };
          }
        }
      },
      defaultVariants: {
        size: "$2"
      }
    });
    var SelectViewport = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, children, ...viewportProps } = props;
        const context = (0, import_context.useSelectContext)(import_constants.VIEWPORT_NAME, __scopeSelect);
        const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
        if (breakpointActive || !import_core4.isWeb) {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context.ForwardSelectContext, {
              context,
              children
            })
          });
        }
        if (!context.floatingContext) {
          return null;
        }
        if (!context.open) {
          return children;
        }
        const {
          style: { scrollbarWidth, listStyleType, ...restStyle },
          ...floatingProps
        } = context.interactions.getFloatingProps();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: selectViewportCSS
              }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_dom_interactions.FloatingFocusManager, {
              context: context.floatingContext,
              preventTabbing: true,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportFrame, {
                size: context.size,
                role: "presentation",
                ...viewportProps,
                ref: forwardedRef,
                ...floatingProps,
                ...restStyle,
                children
              })
            })
          ]
        });
      }
    );
    SelectViewport.displayName = import_constants.VIEWPORT_NAME;
    var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/Select.js
var require_Select = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/Select.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Select_exports = {};
    __export2(Select_exports, {
      Select: () => Select,
      SelectGroupFrame: () => SelectGroupFrame,
      SelectIcon: () => SelectIcon,
      SelectItem: () => SelectItem,
      SelectItemTextFrame: () => SelectItemTextFrame,
      SelectSeparator: () => SelectSeparator,
      SelectSheetContents: () => SelectSheetContents,
      SelectTrigger: () => SelectTrigger
    });
    module2.exports = __toCommonJS2(Select_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_core22 = require("@tamagui/core-node");
    var import_core32 = require("@tamagui/core-node");
    var import_list_item = require_cjs28();
    var import_portal = require_cjs9();
    var import_separator = require_cjs32();
    var import_sheet = require_cjs13();
    var import_stacks = require_cjs8();
    var import_text = require_cjs14();
    var import_use_controllable_state = require_cjs11();
    var React3 = __toESM2(require("react"));
    var ReactDOM = __toESM2(require("react-dom"));
    var import_constants = require_constants2();
    var import_context = require_context();
    var import_SelectContent = require_SelectContent();
    var import_SelectImpl = require_SelectImpl();
    var import_SelectScrollButton = require_SelectScrollButton();
    var import_SelectViewport = require_SelectViewport();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var TRIGGER_NAME = "SelectTrigger";
    var SelectTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          disabled = false,
          "aria-labelledby": ariaLabelledby,
          ...triggerProps
        } = props;
        const context = (0, import_context.useSelectContext)(TRIGGER_NAME, __scopeSelect);
        const labelledBy = ariaLabelledby;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_list_item.ListItem, {
          componentName: TRIGGER_NAME,
          backgrounded: true,
          radiused: true,
          hoverTheme: true,
          pressTheme: true,
          focusTheme: true,
          focusable: true,
          borderWidth: 1,
          size: context.size,
          "aria-expanded": context.open,
          "aria-autocomplete": "none",
          "aria-labelledby": labelledBy,
          dir: context.dir,
          disabled,
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          ...process.env.TAMAGUI_TARGET === "web" && context.interactions ? context.interactions.getReferenceProps() : {
            onPress() {
              context.setOpen(!context.open);
            }
          }
        });
      }
    );
    SelectTrigger.displayName = TRIGGER_NAME;
    var VALUE_NAME = "SelectValue";
    var SelectValueFrame = (0, import_core22.styled)(import_text.Paragraph, {
      name: VALUE_NAME,
      selectable: false
    });
    var SelectValue = SelectValueFrame.extractable(
      React3.forwardRef(
        ({ __scopeSelect, children: childrenProp, placeholder }, forwardedRef) => {
          const context = (0, import_context.useSelectContext)(VALUE_NAME, __scopeSelect);
          const { onValueNodeHasChildrenChange } = context;
          const hasChildren = childrenProp !== void 0;
          const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.onValueNodeChange);
          (0, import_core22.useIsomorphicLayoutEffect)(() => {
            onValueNodeHasChildrenChange(hasChildren);
          }, [onValueNodeHasChildrenChange, hasChildren]);
          const children = childrenProp ?? context.selectedItem;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValueFrame, {
            size: context.size,
            ref: composedRefs,
            pointerEvents: "none",
            children: context.value === void 0 && placeholder !== void 0 ? placeholder : children
          });
        }
      )
    );
    SelectValue.displayName = VALUE_NAME;
    var SelectIcon = (0, import_core22.styled)(import_stacks.XStack, {
      name: "SelectIcon",
      "aria-hidden": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_text.Paragraph, {
        children: "\u25BC"
      })
    });
    var ITEM_NAME = "SelectItem";
    var [SelectItemContextProvider, useSelectItemContext] = (0, import_context.createSelectContext)(ITEM_NAME);
    var SelectItem = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          value,
          disabled = false,
          textValue: textValueProp,
          index,
          ...itemProps
        } = props;
        const context = (0, import_context.useSelectContext)(ITEM_NAME, __scopeSelect);
        const isSelected = context.value === value;
        const textId = (0, import_core32.useId)();
        const {
          selectedIndex,
          setSelectedIndex,
          listRef,
          open,
          setOpen,
          onChange,
          setActiveIndex,
          allowMouseUpRef,
          allowSelectRef,
          setValueAtIndex,
          selectTimeoutRef,
          dataRef
        } = context;
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => {
          if (!import_core4.isWeb)
            return;
          if (node instanceof HTMLElement) {
            if (listRef) {
              listRef.current[index] = node;
            }
          }
        });
        React3.useEffect(() => {
          setValueAtIndex(index, value);
        }, [index, setValueAtIndex, value]);
        function handleSelect() {
          setSelectedIndex(index);
          onChange(value);
          setOpen(false);
        }
        __name(handleSelect, "handleSelect");
        const selectItemProps = context.interactions ? context.interactions.getItemProps({
          onTouchStart() {
            allowSelectRef.current = true;
            allowMouseUpRef.current = false;
          },
          onKeyDown(event) {
            if (event.key === "Enter" || event.key === " " && !(dataRef == null ? void 0 : dataRef.current.typing)) {
              event.preventDefault();
              handleSelect();
            } else {
              allowSelectRef.current = true;
            }
          },
          onClick() {
            if (allowSelectRef.current) {
              setSelectedIndex(index);
              setOpen(false);
            }
          },
          onMouseUp() {
            if (!allowMouseUpRef.current) {
              return;
            }
            if (allowSelectRef.current) {
              handleSelect();
            }
            clearTimeout(selectTimeoutRef.current);
            selectTimeoutRef.current = setTimeout(() => {
              allowSelectRef.current = true;
            });
          }
        }) : {
          onPress: handleSelect
        };
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
          scope: __scopeSelect,
          value,
          textId: textId || "",
          isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_list_item.ListItem, {
            backgrounded: true,
            pressTheme: true,
            cursor: "",
            focusTheme: true,
            componentName: ITEM_NAME,
            ref: composedRefs,
            "aria-labelledby": textId,
            "aria-selected": isSelected,
            "data-state": isSelected ? "active" : "inactive",
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            tabIndex: disabled ? void 0 : -1,
            size: context.size,
            ...itemProps,
            ...selectItemProps
          })
        });
      }
    );
    SelectItem.displayName = ITEM_NAME;
    var ITEM_TEXT_NAME = "SelectItemText";
    var SelectItemTextFrame = (0, import_core22.styled)(import_text.Paragraph, {
      name: ITEM_TEXT_NAME,
      selectable: false
    });
    var SelectItemText = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, className, ...itemTextProps } = props;
        const context = (0, import_context.useSelectContext)(ITEM_TEXT_NAME, __scopeSelect);
        const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
        const isSelected = itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren;
        const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemTextFrame, {
          className,
          size: context.size,
          id: itemContext.textId,
          ...itemTextProps,
          ref: composedRefs
        });
        if (!import_core4.isWeb) {
          React3.useEffect(() => {
            if (isSelected) {
              context.setSelectedItem(contents);
            }
          }, [isSelected]);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            contents,
            import_core4.isWeb && isSelected ? ReactDOM.createPortal(itemTextProps.children, context.valueNode) : null
          ]
        });
      }
    );
    SelectItemText.displayName = ITEM_TEXT_NAME;
    var ITEM_INDICATOR_NAME = "SelectItemIndicator";
    var SelectItemIndicatorFrame = (0, import_core22.styled)(import_stacks.XStack, {
      name: ITEM_TEXT_NAME
    });
    var SelectItemIndicator = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...itemIndicatorProps } = props;
        const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
        return itemContext.isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicatorFrame, {
          "aria-hidden": true,
          ...itemIndicatorProps,
          ref: forwardedRef
        }) : null;
      }
    );
    SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
    var GROUP_NAME = "SelectGroup";
    var [SelectGroupContextProvider, useSelectGroupContext] = (0, import_context.createSelectContext)(GROUP_NAME);
    var SelectGroupFrame = (0, import_core22.styled)(import_stacks.YStack, {
      name: GROUP_NAME,
      width: "100%"
    });
    var SelectGroup = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...groupProps } = props;
        const groupId = (0, import_core32.useId)();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
          scope: __scopeSelect,
          id: groupId || "",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupFrame, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
          })
        });
      }
    );
    SelectGroup.displayName = GROUP_NAME;
    var LABEL_NAME = "SelectLabel";
    var SelectLabel = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...labelProps } = props;
        const context = (0, import_context.useSelectContext)(LABEL_NAME, __scopeSelect);
        const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_list_item.ListItem, {
          componentName: LABEL_NAME,
          fontWeight: "800",
          id: groupContext.id,
          size: context.size,
          ...labelProps,
          ref: forwardedRef
        });
      }
    );
    SelectLabel.displayName = LABEL_NAME;
    var SelectSeparator = (0, import_core22.styled)(import_separator.Separator, {
      name: "SelectSeparator"
    });
    var SelectSheetController = /* @__PURE__ */ __name((props) => {
      const context = (0, import_context.useSelectContext)("SelectSheetController", props.__scopeSelect);
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
      const getShowSheet = (0, import_core22.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sheet.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "SelectSheetController");
    var SHEET_CONTENTS_NAME = "SelectSheetContents";
    var SelectSheetContents = /* @__PURE__ */ __name(({ __scopeSelect }) => {
      const context = (0, import_context.useSelectContext)(SHEET_CONTENTS_NAME, __scopeSelect);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
        name: `${context.scopeKey}SheetContents`
      });
    }, "SelectSheetContents");
    SelectSheetContents.displayName = SHEET_CONTENTS_NAME;
    var SelectSheetImpl = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: props.children
      });
    }, "SelectSheetImpl");
    var Select = (0, import_core22.withStaticProperties)(
      (props) => {
        const {
          __scopeSelect,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          value: valueProp,
          defaultValue,
          onValueChange,
          size: sizeProp = "$4",
          sheetBreakpoint = false,
          dir
        } = props;
        const isSheet = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(sheetBreakpoint);
        const SelectImpl = isSheet ? SelectSheetImpl : import_SelectImpl.SelectInlineImpl;
        const forceUpdate = React3.useReducer(() => ({}), {})[1];
        const [selectedItem, setSelectedItem] = React3.useState(null);
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange,
          strategy: "most-recent-wins"
        });
        const [value, setValue] = (0, import_use_controllable_state.useControllableState)({
          prop: valueProp,
          defaultProp: defaultValue || "",
          onChange: onValueChange,
          strategy: "most-recent-wins"
        });
        const [activeIndex, setActiveIndex] = React3.useState(null);
        const selectedIndexRef = React3.useRef(null);
        const activeIndexRef = React3.useRef(null);
        const listContentRef = React3.useRef([]);
        const [selectedIndex, setSelectedIndex] = React3.useState(
          Math.max(0, listContentRef.current.indexOf(value))
        );
        const [valueNode, setValueNode] = React3.useState(null);
        const [valueNodeHasChildren, setValueNodeHasChildren] = React3.useState(false);
        (0, import_core22.useIsomorphicLayoutEffect)(() => {
          selectedIndexRef.current = selectedIndex;
          activeIndexRef.current = activeIndex;
        });
        const id = (0, import_core32.useId)();
        const scopeKey = __scopeSelect ? Object.keys(__scopeSelect)[0] ?? id : id;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context.SelectProvider, {
          dir,
          blockSelection: false,
          size: sizeProp,
          fallback: false,
          selectedItem,
          setSelectedItem,
          forceUpdate,
          valueNode,
          onValueNodeChange: setValueNode,
          onValueNodeHasChildrenChange: setValueNodeHasChildren,
          valueNodeHasChildren,
          scopeKey,
          sheetBreakpoint,
          scope: __scopeSelect,
          setValueAtIndex: (index, value2) => {
            listContentRef.current[index] = value2;
          },
          activeIndex,
          onChange: setValue,
          selectedIndex,
          setActiveIndex,
          setOpen,
          setSelectedIndex,
          value,
          open,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSheetController, {
            onOpenChange: setOpen,
            __scopeSelect,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectImpl, {
              activeIndexRef,
              listContentRef,
              selectedIndexRef,
              ...props,
              open,
              value,
              children
            })
          })
        });
      },
      {
        Content: import_SelectContent.SelectContent,
        Group: SelectGroup,
        Icon: SelectIcon,
        Item: SelectItem,
        ItemIndicator: SelectItemIndicator,
        ItemText: SelectItemText,
        Label: SelectLabel,
        ScrollDownButton: import_SelectScrollButton.SelectScrollDownButton,
        ScrollUpButton: import_SelectScrollButton.SelectScrollUpButton,
        Trigger: SelectTrigger,
        Value: SelectValue,
        Viewport: import_SelectViewport.SelectViewport,
        SheetContents: SelectSheetContents,
        Sheet: import_sheet.ControlledSheet
      }
    );
    Select.displayName = import_constants.SELECT_NAME;
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/index.js
var require_cjs33 = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Select(), module2.exports);
    __reExport2(src_exports, require_context(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js
var require_useDirection = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useDirection_exports = {};
    __export2(useDirection_exports, {
      DirectionProvider: () => DirectionProvider,
      Provider: () => Provider,
      useDirection: () => useDirection
    });
    module2.exports = __toCommonJS2(useDirection_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var React3 = __toESM2(require("react"));
    var DirectionContext = React3.createContext(void 0);
    var DirectionProvider = /* @__PURE__ */ __name((props) => {
      const { dir, children } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
        value: dir,
        children
      });
    }, "DirectionProvider");
    function useDirection(localDir) {
      const globalDir = React3.useContext(DirectionContext);
      return localDir || globalDir || "ltr";
    }
    __name(useDirection, "useDirection");
    var Provider = DirectionProvider;
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/index.js
var require_cjs34 = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useDirection(), module2.exports);
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      ARROW_KEYS: () => ARROW_KEYS,
      BACK_KEYS: () => BACK_KEYS,
      PAGE_KEYS: () => PAGE_KEYS,
      SLIDER_NAME: () => SLIDER_NAME,
      SliderOrientationProvider: () => SliderOrientationProvider,
      SliderProvider: () => SliderProvider,
      createSliderContext: () => createSliderContext,
      createSliderScope: () => createSliderScope,
      useSliderContext: () => useSliderContext,
      useSliderOrientationContext: () => useSliderOrientationContext
    });
    module2.exports = __toCommonJS2(constants_exports);
    var import_create_context = require_cjs3();
    var SLIDER_NAME = "Slider";
    var [createSliderContext, createSliderScope] = (0, import_create_context.createContextScope)(SLIDER_NAME);
    var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
    var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
      startEdge: "left",
      endEdge: "right",
      sizeProp: "width",
      size: 0,
      direction: 1
    });
    var PAGE_KEYS = ["PageUp", "PageDown"];
    var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    var BACK_KEYS = {
      ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
      rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
    };
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/helpers.js
var require_helpers = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/helpers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var helpers_exports = {};
    __export2(helpers_exports, {
      convertValueToPercentage: () => convertValueToPercentage,
      getClosestValueIndex: () => getClosestValueIndex,
      getDecimalCount: () => getDecimalCount,
      getLabel: () => getLabel,
      getNextSortedValues: () => getNextSortedValues,
      getThumbInBoundsOffset: () => getThumbInBoundsOffset,
      hasMinStepsBetweenValues: () => hasMinStepsBetweenValues,
      linearScale: () => linearScale,
      roundValue: () => roundValue
    });
    module2.exports = __toCommonJS2(helpers_exports);
    function getNextSortedValues(prevValues = [], nextValue, atIndex) {
      const nextValues = [...prevValues];
      nextValues[atIndex] = nextValue;
      return nextValues.sort((a, b) => a - b);
    }
    __name(getNextSortedValues, "getNextSortedValues");
    function convertValueToPercentage(value, min, max) {
      const maxSteps = max - min;
      const percentPerStep = 100 / maxSteps;
      return percentPerStep * (value - min);
    }
    __name(convertValueToPercentage, "convertValueToPercentage");
    function getLabel(index, totalValues) {
      if (totalValues > 2) {
        return `Value ${index + 1} of ${totalValues}`;
      } else if (totalValues === 2) {
        return ["Minimum", "Maximum"][index];
      } else {
        return void 0;
      }
    }
    __name(getLabel, "getLabel");
    function getClosestValueIndex(values, nextValue) {
      if (values.length === 1)
        return 0;
      const distances = values.map((value) => Math.abs(value - nextValue));
      const closestDistance = Math.min(...distances);
      return distances.indexOf(closestDistance);
    }
    __name(getClosestValueIndex, "getClosestValueIndex");
    function getThumbInBoundsOffset(width, left, direction) {
      const halfWidth = width / 2;
      const halfPercent = 50;
      const offset = linearScale([0, halfPercent], [0, halfWidth]);
      return (halfWidth - offset(left) * direction) * direction;
    }
    __name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
    function getStepsBetweenValues(values) {
      return values.slice(0, -1).map((value, index) => values[index + 1] - value);
    }
    __name(getStepsBetweenValues, "getStepsBetweenValues");
    function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
      if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
      }
      return true;
    }
    __name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
    function linearScale(input, output) {
      return (value) => {
        if (input[0] === input[1] || output[0] === output[1])
          return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
      };
    }
    __name(linearScale, "linearScale");
    function getDecimalCount(value) {
      return (String(value).split(".")[1] || "").length;
    }
    __name(getDecimalCount, "getDecimalCount");
    function roundValue(value, decimalCount) {
      const rounder = Math.pow(10, decimalCount);
      return Math.round(value * rounder) / rounder;
    }
    __name(roundValue, "roundValue");
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/SliderImpl.js
var require_SliderImpl = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/SliderImpl.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SliderImpl_exports = {};
    __export2(SliderImpl_exports, {
      DirectionalYStack: () => DirectionalYStack2,
      SliderFrame: () => SliderFrame2,
      SliderImpl: () => SliderImpl
    });
    module2.exports = __toCommonJS2(SliderImpl_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var DirectionalYStack2 = (0, import_core4.styled)(import_stacks.YStack, {
      variants: {
        orientation: {
          horizontal: {},
          vertical: {}
        }
      }
    });
    var SliderFrame2 = (0, import_core4.styled)(DirectionalYStack2, {
      position: "relative",
      variants: {
        size: (val, extras) => {
          const orientation = extras.props.orientation;
          const size2 = Math.round((0, import_core4.getVariableValue)((0, import_core4.getSize)(val)) / 6);
          if (orientation === "horizontal") {
            return {
              height: size2,
              borderRadius: size2,
              justifyContent: "center"
            };
          }
          return {
            width: size2,
            borderRadius: size2,
            alignItems: "center"
          };
        }
      }
    });
    var SliderImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSlider,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onHomeKeyDown,
          onEndKeyDown,
          onStepKeyDown,
          ...sliderProps
        } = props;
        const context = (0, import_constants.useSliderContext)(import_constants.SLIDER_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderFrame2, {
          size: "$4",
          ...sliderProps,
          "data-orientation": sliderProps.orientation,
          ref: forwardedRef,
          ...import_core4.isWeb && {
            onKeyDown: (event) => {
              if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
              } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
              } else if (import_constants.PAGE_KEYS.concat(import_constants.ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
              }
            }
          },
          onMoveShouldSetResponderCapture: () => true,
          onScrollShouldSetResponder: () => true,
          onScrollShouldSetResponderCapture: () => true,
          onMoveShouldSetResponder: () => true,
          onStartShouldSetResponder: () => true,
          onResponderTerminationRequest: () => {
            return false;
          },
          onResponderGrant: (0, import_core4.composeEventHandlers)(props.onResponderGrant, (event) => {
            const target = event.target;
            const isStartingOnThumb = context.thumbs.has(target);
            if (import_core4.isWeb && target instanceof HTMLElement) {
              if (context.thumbs.has(target)) {
                target.focus();
              }
            }
            onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
          }),
          onResponderMove: (0, import_core4.composeEventHandlers)(props.onResponderMove, (event) => {
            event.preventDefault();
            event.stopPropagation();
            onSlideMove(event);
          }),
          onResponderRelease: (0, import_core4.composeEventHandlers)(props.onResponderRelease, (event) => {
            onSlideEnd(event);
          })
        });
      }
    );
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/Slider.js
var require_Slider = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/Slider.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Slider_exports = {};
    __export2(Slider_exports, {
      Range: () => Range,
      Slider: () => Slider,
      SliderThumb: () => SliderThumb,
      SliderThumbFrame: () => SliderThumbFrame,
      SliderTrack: () => SliderTrack,
      SliderTrackActive: () => SliderTrackActive,
      SliderTrackActiveFrame: () => SliderTrackActiveFrame,
      SliderTrackFrame: () => SliderTrackFrame,
      Thumb: () => Thumb,
      Track: () => Track
    });
    module2.exports = __toCommonJS2(Slider_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_helpers = require_cjs22();
    var import_stacks = require_cjs8();
    var import_use_controllable_state = require_cjs11();
    var import_use_direction = require_cjs34();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var import_helpers2 = require_helpers();
    var import_SliderImpl = require_SliderImpl();
    var SliderHorizontal = React3.forwardRef(
      (props, forwardedRef) => {
        const { min, max, dir, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const direction = (0, import_use_direction.useDirection)(dir);
        const isDirectionLTR = direction === "ltr";
        const sliderRef = React3.useRef(null);
        const [state, setState] = React3.useState(() => ({ size: 0, offset: 0 }));
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = isDirectionLTR ? [min, max] : [max, min];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_constants.SliderOrientationProvider, {
          scope: props.__scopeSlider,
          startEdge: isDirectionLTR ? "left" : "right",
          endEdge: isDirectionLTR ? "right" : "left",
          direction: isDirectionLTR ? 1 : -1,
          sizeProp: "width",
          size: state.size,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_SliderImpl.SliderImpl, {
            ref: (0, import_compose_refs.composeRefs)(forwardedRef, sliderRef),
            dir: direction,
            ...sliderProps,
            orientation: "horizontal",
            onLayout: () => {
              var _a;
              (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, width, _height, pageX, _pageY) => {
                setState({
                  size: width,
                  offset: pageX
                });
              });
            },
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationX);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = import_constants.BACK_KEYS[direction].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          })
        });
      }
    );
    var SliderVertical = React3.forwardRef(
      (props, forwardedRef) => {
        const { min, max, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const [state, setState] = React3.useState(() => ({ size: 0, offset: 0 }));
        const sliderRef = React3.useRef(null);
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = [max, min];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_constants.SliderOrientationProvider, {
          scope: props.__scopeSlider,
          startEdge: "bottom",
          endEdge: "top",
          sizeProp: "height",
          size: state.size,
          direction: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_SliderImpl.SliderImpl, {
            ref: (0, import_compose_refs.composeRefs)(forwardedRef, sliderRef),
            ...sliderProps,
            orientation: "vertical",
            onLayout: () => {
              var _a;
              (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, _width, height, _pageX, pageY) => {
                setState({
                  size: height,
                  offset: pageY
                });
              });
            },
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationY);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = import_constants.BACK_KEYS.ltr.includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          })
        });
      }
    );
    var TRACK_NAME = "SliderTrack";
    var SliderTrackFrame = (0, import_core4.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrack",
      height: "100%",
      width: "100%",
      backgroundColor: "$background",
      position: "relative",
      borderRadius: 1e5,
      overflow: "hidden"
    });
    var SliderTrack = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...trackProps } = props;
        const context = (0, import_constants.useSliderContext)(TRACK_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrackFrame, {
          "data-disabled": context.disabled ? "" : void 0,
          "data-orientation": context.orientation,
          orientation: context.orientation,
          size: context.size,
          ...trackProps,
          ref: forwardedRef
        });
      }
    );
    SliderTrack.displayName = TRACK_NAME;
    var RANGE_NAME = "SliderTrackActive";
    var SliderTrackActiveFrame = (0, import_core4.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrackActive",
      backgroundColor: "$background",
      position: "absolute"
    });
    var SliderTrackActive = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...rangeProps } = props;
        const context = (0, import_constants.useSliderContext)(RANGE_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(RANGE_NAME, __scopeSlider);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
        const valuesCount = context.values.length;
        const percentages = context.values.map(
          (value) => (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max)
        );
        const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
        const offsetEnd = 100 - Math.max(...percentages);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrackActiveFrame, {
          orientation: context.orientation,
          "data-orientation": context.orientation,
          "data-disabled": context.disabled ? "" : void 0,
          size: context.size,
          ...rangeProps,
          ref: composedRefs,
          ...{
            [orientation.startEdge]: offsetStart + "%",
            [orientation.endEdge]: offsetEnd + "%"
          },
          ...orientation.sizeProp === "width" ? {
            height: "100%"
          } : {
            left: 0,
            right: 0
          }
        });
      }
    );
    SliderTrackActive.displayName = RANGE_NAME;
    var THUMB_NAME = "SliderThumb";
    var getThumbSize = /* @__PURE__ */ __name((val) => {
      const size2 = typeof val === "number" ? val : (0, import_core4.getSize)(val, -1);
      return {
        width: size2,
        height: size2,
        minWidth: size2,
        minHeight: size2
      };
    }, "getThumbSize");
    var SliderThumbFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "SliderThumb",
      position: "absolute",
      bordered: 2,
      borderWidth: 2,
      backgrounded: true,
      pressTheme: import_core4.isWeb,
      focusTheme: import_core4.isWeb,
      hoverTheme: import_core4.isWeb,
      variants: {
        size: {
          "...size": getThumbSize
        }
      }
    });
    var SliderThumb = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, index, size: sizeProp, ...thumbProps } = props;
        const context = (0, import_constants.useSliderContext)(THUMB_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(THUMB_NAME, __scopeSlider);
        const [thumb, setThumb] = React3.useState(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => setThumb(node));
        const value = context.values[index];
        const percent = value === void 0 ? 0 : (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max);
        const label = (0, import_helpers2.getLabel)(index, context.values.length);
        const [size2, setSize] = React3.useState(() => {
          const estimatedSize = (0, import_core4.getVariableValue)(getThumbSize(sizeProp).width);
          return estimatedSize;
        });
        const thumbInBoundsOffset = size2 ? (0, import_helpers2.getThumbInBoundsOffset)(size2, percent, orientation.direction) : 0;
        React3.useEffect(() => {
          if (thumb) {
            context.thumbs.add(thumb);
            return () => {
              context.thumbs.delete(thumb);
            };
          }
        }, [thumb, context.thumbs]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbFrame, {
          ref: composedRefs,
          role: "slider",
          "aria-label": props["aria-label"] || label,
          "aria-valuemin": context.min,
          "aria-valuenow": value,
          "aria-valuemax": context.max,
          "aria-orientation": context.orientation,
          "data-orientation": context.orientation,
          "data-disabled": context.disabled ? "" : void 0,
          tabIndex: context.disabled ? void 0 : 0,
          ...thumbProps,
          ...context.orientation === "horizontal" ? {
            x: thumbInBoundsOffset - size2 / 2,
            y: -size2 / 2,
            top: "50%",
            ...size2 === 0 && {
              top: "auto",
              bottom: "auto"
            }
          } : {
            x: -size2 / 2,
            y: size2 / 2,
            left: "50%",
            ...size2 === 0 && {
              left: "auto",
              right: "auto"
            }
          },
          size: sizeProp ?? context.size ?? "$4",
          onLayout: (e) => {
            setSize(e.nativeEvent.layout[orientation.sizeProp]);
          },
          ...{
            [orientation.startEdge]: `${percent}%`
          },
          onFocus: (0, import_helpers.composeEventHandlers)(props.onFocus, () => {
            context.valueIndexToChangeRef.current = index;
          })
        });
      }
    );
    SliderThumb.displayName = THUMB_NAME;
    var Slider = (0, import_core4.withStaticProperties)(
      React3.forwardRef((props, forwardedRef) => {
        const {
          name,
          min = 0,
          max = 100,
          step = 1,
          orientation = "horizontal",
          disabled = false,
          minStepsBetweenThumbs = 0,
          defaultValue = [min],
          value,
          onValueChange = /* @__PURE__ */ __name(() => {
          }, "onValueChange"),
          size: sizeProp,
          ...sliderProps
        } = props;
        const sliderRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(sliderRef, forwardedRef);
        const thumbRefs = React3.useRef(/* @__PURE__ */ new Set());
        const valueIndexToChangeRef = React3.useRef(0);
        const isHorizontal = orientation === "horizontal";
        const [values = [], setValues] = (0, import_use_controllable_state.useControllableState)({
          prop: value,
          defaultProp: defaultValue,
          onChange: (value2) => {
            var _a;
            if (import_core4.isWeb) {
              const thumbs = [...thumbRefs.current];
              (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
            }
            onValueChange(value2);
          }
        });
        if (import_core4.isWeb) {
          React3.useEffect(() => {
            const node = sliderRef.current;
            if (!node)
              return;
            const preventDefault = /* @__PURE__ */ __name((e) => {
              e.preventDefault();
            }, "preventDefault");
            node.addEventListener("touchstart", preventDefault);
            return () => {
              node.removeEventListener("touchstart", preventDefault);
            };
          }, []);
        }
        function handleSlideMove(value2) {
          updateValues(value2, valueIndexToChangeRef.current);
        }
        __name(handleSlideMove, "handleSlideMove");
        function updateValues(value2, atIndex) {
          const decimalCount = (0, import_helpers2.getDecimalCount)(step);
          const snapToStep = (0, import_helpers2.roundValue)(Math.round((value2 - min) / step) * step + min, decimalCount);
          const nextValue = (0, import_helpers.clamp)(snapToStep, [min, max]);
          setValues((prevValues = []) => {
            const nextValues = (0, import_helpers2.getNextSortedValues)(prevValues, nextValue, atIndex);
            if ((0, import_helpers2.hasMinStepsBetweenValues)(nextValues, minStepsBetweenThumbs * step)) {
              valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
              return String(nextValues) === String(prevValues) ? prevValues : nextValues;
            } else {
              return prevValues;
            }
          });
        }
        __name(updateValues, "updateValues");
        const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_constants.SliderProvider, {
          scope: props.__scopeSlider,
          disabled,
          min,
          max,
          valueIndexToChangeRef,
          thumbs: thumbRefs.current,
          values,
          orientation,
          size: sizeProp,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOriented, {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: composedRefs,
            min,
            max,
            onSlideStart: disabled ? void 0 : (value2, target) => {
              if (target !== "thumb") {
                const closestIndex = (0, import_helpers2.getClosestValueIndex)(values, value2);
                updateValues(value2, closestIndex);
              }
            },
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onHomeKeyDown: () => !disabled && updateValues(min, 0),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = import_constants.PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && import_constants.ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex);
              }
            }
          })
        });
      }),
      {
        Track: SliderTrack,
        TrackActive: SliderTrackActive,
        Thumb: SliderThumb
      }
    );
    Slider.displayName = import_constants.SLIDER_NAME;
    var Track = SliderTrack;
    var Range = SliderTrackActive;
    var Thumb = SliderThumb;
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/index.js
var require_cjs35 = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      DirectionalYStack: () => import_SliderImpl.DirectionalYStack,
      SliderFrame: () => import_SliderImpl.SliderFrame
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Slider(), module2.exports);
    var import_SliderImpl = require_SliderImpl();
  }
});

// ../../node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// ../../node_modules/@tamagui/switch/dist/cjs/Switch.js
var require_Switch = __commonJS({
  "../../node_modules/@tamagui/switch/dist/cjs/Switch.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Switch_exports = {};
    __export2(Switch_exports, {
      Switch: () => Switch,
      SwitchFrame: () => SwitchFrame,
      SwitchThumb: () => SwitchThumb,
      SwitchThumbFrame: () => SwitchThumbFrame,
      createSwitchScope: () => createSwitchScope
    });
    module2.exports = __toCommonJS2(Switch_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_use_previous = require_dist3();
    var import_compose_refs = require_cjs2();
    var import_core4 = require("@tamagui/core-node");
    var import_create_context = require_cjs3();
    var import_focusable = require_cjs26();
    var import_label = require_cjs27();
    var import_stacks = require_cjs8();
    var import_use_controllable_state = require_cjs11();
    var React3 = __toESM2(require("react"));
    var SWITCH_NAME = "Switch";
    var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round((0, import_core4.getVariableValue)((0, import_core4.getSize)(val)) * 0.65), "getSwitchHeight");
    var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
    var scopeContexts = (0, import_create_context.createContextScope)(SWITCH_NAME);
    var [createSwitchContext] = scopeContexts;
    var createSwitchScope = scopeContexts[1];
    var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
    var THUMB_NAME = "SwitchThumb";
    var SwitchThumbFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "SwitchThumb",
      backgroundColor: "$background",
      borderRadius: 1e3,
      variants: {
        size: {
          "...size": (val) => ({
            height: getSwitchHeight(val),
            width: getSwitchHeight(val)
          })
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var SwitchThumb = SwitchThumbFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopeSwitch, ...thumbProps } = props;
          const { size: size2, disabled, checked } = useSwitchContext(THUMB_NAME, __scopeSwitch);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumbFrame, {
            size: size2,
            "data-state": getState(checked),
            "data-disabled": disabled ? "" : void 0,
            ...thumbProps,
            x: checked ? (0, import_core4.getVariableValue)(getSwitchWidth(size2)) - (0, import_core4.getVariableValue)(getSwitchHeight(size2)) : 0,
            ref: forwardedRef
          });
        }
      )
    );
    SwitchThumb.displayName = THUMB_NAME;
    var SwitchFrame = (0, import_core4.styled)(import_stacks.XStack, {
      name: "Switch",
      tag: "button",
      borderRadius: 1e3,
      borderWidth: 2,
      borderColor: "transparent",
      backgroundColor: "$background",
      focusStyle: {
        borderColor: "$borderColorFocus"
      },
      variants: {
        size: {
          "...size": (val) => {
            const height = (0, import_core4.calc)(getSwitchHeight(val), "+", 4);
            const width = (0, import_core4.calc)(getSwitchWidth(val), "+", 4);
            return {
              height,
              minHeight: height,
              width
            };
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var Switch = (0, import_core4.withStaticProperties)(
      SwitchFrame.extractable(
        React3.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeSwitch,
              labeledBy: ariaLabelledby,
              name,
              checked: checkedProp,
              defaultChecked,
              required,
              disabled,
              value = "on",
              onCheckedChange,
              size: size2 = "$4",
              ...switchProps
            } = props;
            const [button, setButton] = React3.useState(null);
            const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => setButton(node));
            const labelId = (0, import_label.useLabelContext)(button);
            const labelledBy = ariaLabelledby || labelId;
            const hasConsumerStoppedPropagationRef = React3.useRef(false);
            const isFormControl = import_core4.isWeb ? button ? Boolean(button.closest("form")) : true : false;
            const [checked = false, setChecked] = (0, import_use_controllable_state.useControllableState)({
              prop: checkedProp,
              defaultProp: defaultChecked || false,
              onChange: onCheckedChange
            });
            if (!import_core4.isWeb) {
              React3.useEffect(() => {
                if (!props.id)
                  return;
                return (0, import_focusable.registerFocusable)(props.id, {
                  focus: () => {
                    setChecked((x) => !x);
                  }
                });
              }, [props.id, setChecked]);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SwitchProvider, {
              scope: __scopeSwitch,
              checked,
              disabled,
              size: size2,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchFrame, {
                  size: size2,
                  role: "switch",
                  "aria-checked": checked,
                  "aria-labelledby": labelledBy,
                  "aria-required": required,
                  "data-state": getState(checked),
                  "data-disabled": disabled ? "" : void 0,
                  disabled,
                  theme: checked ? "active" : null,
                  themeShallow: true,
                  tabIndex: disabled ? void 0 : 0,
                  value,
                  ...switchProps,
                  ref: composedRefs,
                  onPress: (event) => {
                    var _a;
                    (_a = props.onPress) == null ? void 0 : _a.call(props, event);
                    setChecked((prevChecked) => !prevChecked);
                    if (import_core4.isWeb && isFormControl) {
                      hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                      if (!hasConsumerStoppedPropagationRef.current)
                        event.stopPropagation();
                    }
                  }
                }),
                import_core4.isWeb && isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BubbleInput, {
                  control: button,
                  bubbles: !hasConsumerStoppedPropagationRef.current,
                  name,
                  value,
                  checked,
                  required,
                  disabled,
                  style: { transform: "translateX(-100%)" }
                })
              ]
            });
          }
        )
      ),
      {
        Thumb: SwitchThumb
      }
    );
    var BubbleInput = /* @__PURE__ */ __name((props) => {
      const { control, checked, bubbles = true, ...inputProps } = props;
      const ref = React3.useRef(null);
      const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
      React3.useEffect(() => {
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
          const event = new Event("click", { bubbles });
          setChecked.call(input, checked);
          input.dispatchEvent(event);
        }
      }, [prevChecked, checked, bubbles]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...inputProps,
        tabIndex: -1,
        ref,
        style: {
          ...props.style,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      });
    }, "BubbleInput");
    function getState(checked) {
      return checked ? "checked" : "unchecked";
    }
    __name(getState, "getState");
  }
});

// ../../node_modules/@tamagui/switch/dist/cjs/index.js
var require_cjs36 = __commonJS({
  "../../node_modules/@tamagui/switch/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Switch(), module2.exports);
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js
var require_Tooltip = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Tooltip_exports = {};
    __export2(Tooltip_exports, {
      Tooltip: () => Tooltip,
      TooltipGroup: () => TooltipGroup
    });
    module2.exports = __toCommonJS2(Tooltip_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core4 = require("@tamagui/core-node");
    var import_popover = require_cjs30();
    var import_popper = require_cjs29();
    var React3 = __toESM2(require("react"));
    var TooltipContent = React3.forwardRef(
      ({ __scopePopover, ...props }, ref) => {
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const popper = (0, import_popper.usePopperContext)("PopperContent", popperScope["__scopePopper"]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverContent, {
          componentName: "TooltipContent",
          disableRemoveScroll: true,
          trapFocus: false,
          padding: props.size || popper.size || "$2",
          pointerEvents: "none",
          ref,
          ...props
        });
      }
    );
    var TooltipArrow = React3.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverArrow, {
        componentName: "TooltipArrow",
        ref,
        ...props
      });
    });
    var TooltipGroup = import_react_dom_interactions.FloatingDelayGroup;
    var Tooltip = (0, import_core4.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          restMs = 500,
          delay: delayProp,
          onOpenChange: onOpenChangeProp,
          ...restProps
        } = props;
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const triggerRef = React3.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React3.useState(false);
        const { delay: delayGroup, setCurrentId } = (0, import_react_dom_interactions.useDelayGroupContext)();
        const delay = delayProp ?? delayGroup;
        const [open, setOpen] = React3.useState(false);
        const id = props.groupId;
        const onOpenChange = (0, import_core4.useEvent)((open2) => {
          setOpen(open2);
          if (open2) {
            setCurrentId(id);
          }
          onOpenChangeProp == null ? void 0 : onOpenChangeProp(open2);
        });
        const useFloatingFn = /* @__PURE__ */ __name((props2) => {
          const floating = (0, import_react_dom_interactions.useFloating)({
            ...props2,
            open,
            onOpenChange
          });
          const { getReferenceProps, getFloatingProps } = (0, import_react_dom_interactions.useInteractions)([
            (0, import_react_dom_interactions.useHover)(floating.context, { delay, restMs }),
            (0, import_react_dom_interactions.useFocus)(floating.context),
            (0, import_react_dom_interactions.useRole)(floating.context, { role: "tooltip" }),
            (0, import_react_dom_interactions.useDismiss)(floating.context),
            (0, import_react_dom_interactions.useDelayGroup)(floating.context, { id })
          ]);
          return {
            ...floating,
            getReferenceProps,
            getFloatingProps
          };
        }, "useFloatingFn");
        const useFloatingContext = React3.useCallback(useFloatingFn, [id, delay, open]);
        const onCustomAnchorAdd = React3.useCallback(() => setHasCustomAnchor(true), []);
        const onCustomAnchorRemove = React3.useCallback(() => setHasCustomAnchor(false), []);
        const contentId = (0, import_core4.useId)();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.FloatingOverrideContext.Provider, {
          value: useFloatingContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.Popper, {
            size: "$2",
            ...popperScope,
            ...restProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.__PopoverProviderInternal, {
              scope: __scopePopover,
              contentId,
              triggerRef,
              sheetBreakpoint: false,
              scopeKey: "",
              open,
              onOpenChange: setOpen,
              onOpenToggle: voidFn,
              hasCustomAnchor,
              onCustomAnchorAdd,
              onCustomAnchorRemove,
              children
            })
          })
        });
      },
      {
        Anchor: import_popover.PopoverAnchor,
        Arrow: TooltipArrow,
        Content: TooltipContent,
        Trigger: import_popover.PopoverTrigger
      }
    );
    Tooltip.displayName = "Tooltip";
    var voidFn = /* @__PURE__ */ __name(() => {
    }, "voidFn");
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js
var require_TooltipSimple = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TooltipSimple_exports = {};
    __export2(TooltipSimple_exports, {
      TooltipSimple: () => TooltipSimple
    });
    module2.exports = __toCommonJS2(TooltipSimple_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core4 = require("@tamagui/core-node");
    var import_text = require_cjs14();
    var import_Tooltip = require_Tooltip();
    var TooltipSimple = /* @__PURE__ */ __name(({
      label,
      children,
      contentProps,
      ...tooltipProps
    }) => {
      let context;
      try {
        context = (0, import_react_dom_interactions.useDelayGroupContext)();
      } catch {
      }
      const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Tooltip.Tooltip, {
        ...tooltipProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tooltip.Tooltip.Trigger, {
            asChild: true,
            children
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.ThemeInverse, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Tooltip.Tooltip.Content, {
              zIndex: 1e3,
              enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
              exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
              x: 0,
              scale: 1,
              y: 0,
              elevation: "$0.5",
              opacity: 1,
              paddingVertical: "$1",
              animation: [
                "quick",
                {
                  opacity: {
                    overshootClamping: true
                  }
                }
              ],
              ...contentProps,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tooltip.Tooltip.Arrow, {}),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_text.Paragraph, {
                  size: "$2",
                  lineHeight: "$0",
                  children: label
                })
              ]
            })
          })
        ]
      });
      if (!context) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tooltip.TooltipGroup, {
          delay: { open: 3e3, close: 100 },
          children: contents
        });
      }
      return contents;
    }, "TooltipSimple");
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/index.js
var require_cjs37 = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Tooltip(), module2.exports);
    __reExport2(src_exports, require_TooltipSimple(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-debounce/dist/cjs/index.js
var require_cjs38 = __commonJS({
  "../../node_modules/@tamagui/use-debounce/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      debounce: () => debounce,
      useDebounce: () => useDebounce,
      useDebounceValue: () => useDebounceValue
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react = require("react");
    function debounce(func, wait, leading) {
      let timeout;
      let isCancelled = false;
      function debounced() {
        isCancelled = false;
        let context = this;
        let args = arguments;
        if (leading && !timeout) {
          func.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          timeout = null;
          if (!leading && !isCancelled) {
            func.apply(context, args);
          }
          isCancelled = false;
        }, wait);
      }
      __name(debounced, "debounced");
      debounced.cancel = () => {
        isCancelled = true;
      };
      return debounced;
    }
    __name(debounce, "debounce");
    var defaultOpts = { leading: false };
    function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
      const dbEffect = (0, import_react.useRef)(null);
      (0, import_react.useEffect)(() => {
        return () => {
          var _a;
          (_a = dbEffect.current) == null ? void 0 : _a.cancel();
        };
      }, []);
      return (0, import_react.useMemo)(() => {
        dbEffect.current = debounce(fn, wait, options.leading);
        return dbEffect.current;
      }, [options.leading, ...mountArgs]);
    }
    __name(useDebounce, "useDebounce");
    function useDebounceValue(val, amt = 0) {
      const [state, setState] = (0, import_react.useState)(val);
      (0, import_react.useEffect)(() => {
        let tm = setTimeout(() => {
          setState((prev) => {
            if (prev === val)
              return prev;
            return val;
          });
        }, amt);
        return () => {
          clearTimeout(tm);
        };
      }, [val]);
      return state;
    }
    __name(useDebounceValue, "useDebounceValue");
  }
});

// ../../node_modules/@tamagui/use-force-update/dist/cjs/index.js
var require_cjs39 = __commonJS({
  "../../node_modules/@tamagui/use-force-update/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isServerSide: () => isServerSide,
      useForceUpdate: () => useForceUpdate
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react = require("react");
    var isServerSide = process.env.TAMAGUI_TARGET === "web" && typeof window === "undefined";
    function useForceUpdate() {
      if (isServerSide) {
        return () => {
        };
      }
      return (0, import_react.useReducer)((x) => x + 1, 0)[1];
    }
    __name(useForceUpdate, "useForceUpdate");
  }
});

// ../../node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js
var require_VisuallyHidden = __commonJS({
  "../../node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var VisuallyHidden_exports = {};
    __export2(VisuallyHidden_exports, {
      VisuallyHidden: () => VisuallyHidden
    });
    module2.exports = __toCommonJS2(VisuallyHidden_exports);
    var import_core4 = require("@tamagui/core-node");
    var VisuallyHidden = (0, import_core4.styled)(import_core4.Stack, {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      zIndex: -1e4,
      overflow: "hidden",
      opacity: 1e-8,
      pointerEvents: "none",
      variants: {
        preserveDimensions: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto"
          }
        },
        visible: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto",
            margin: 0,
            zIndex: 1,
            overflow: "visible",
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    });
    VisuallyHidden["isVisuallyHidden"] = true;
  }
});

// ../../node_modules/@tamagui/visually-hidden/dist/cjs/index.js
var require_cjs40 = __commonJS({
  "../../node_modules/@tamagui/visually-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_VisuallyHidden(), module2.exports);
  }
});

// ../../node_modules/tamagui/dist/cjs/views/TamaguiProvider.js
var require_TamaguiProvider = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/TamaguiProvider.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TamaguiProvider_exports = {};
    __export2(TamaguiProvider_exports, {
      TamaguiProvider: () => TamaguiProvider
    });
    module2.exports = __toCommonJS2(TamaguiProvider_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_portal = require_cjs9();
    var TamaguiProvider = import_core4.isRSC ? import_core4.TamaguiProvider : ({ children, ...props }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.TamaguiProvider, {
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalProvider, {
          children
        })
      });
    };
  }
});

// ../../node_modules/tamagui/dist/cjs/viewTypes.js
var require_viewTypes = __commonJS({
  "../../node_modules/tamagui/dist/cjs/viewTypes.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var viewTypes_exports = {};
    module2.exports = __toCommonJS2(viewTypes_exports);
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Anchor.js
var require_Anchor = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Anchor.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Anchor_exports = {};
    __export2(Anchor_exports, {
      Anchor: () => Anchor
    });
    module2.exports = __toCommonJS2(Anchor_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_text = require_cjs14();
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    import_react.default["keep"];
    var AnchorFrame = (0, import_core4.styled)(import_text.SizableText, {
      name: "Anchor",
      tag: "a",
      accessibilityRole: "link"
    });
    var Anchor = AnchorFrame.extractable(
      (0, import_react.forwardRef)(({ href, target, ...props }, ref) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorFrame, {
          ...props,
          ...import_core4.isWeb ? {
            href,
            target
          } : {
            onPress: (event) => {
              var _a;
              (_a = props.onPress) == null ? void 0 : _a.call(props, event);
              if (href !== void 0) {
                import_react_native3.Linking.openURL(href);
              }
            }
          },
          ref
        });
      })
    );
  }
});

// ../../node_modules/tamagui/dist/cjs/views/EnsureFlexed.js
var require_EnsureFlexed = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/EnsureFlexed.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var EnsureFlexed_exports = {};
    __export2(EnsureFlexed_exports, {
      EnsureFlexed: () => EnsureFlexed
    });
    module2.exports = __toCommonJS2(EnsureFlexed_exports);
    var import_core4 = require("@tamagui/core-node");
    var EnsureFlexed = (0, import_core4.styled)(import_core4.Text, {
      opacity: 0,
      lineHeight: 0,
      height: 0,
      display: "flex",
      fontSize: 200,
      children: `wwwwwwwwwwwwwwwwwww`,
      hoverStyle: {
        backgroundColor: "red"
      },
      pointerEvents: "none"
    });
    EnsureFlexed["isVisuallyHidden"] = true;
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Fieldset.js
var require_Fieldset = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Fieldset.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Fieldset_exports = {};
    __export2(Fieldset_exports, {
      Fieldset: () => Fieldset
    });
    module2.exports = __toCommonJS2(Fieldset_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var Fieldset = (0, import_core4.styled)(import_stacks.YStack, {
      name: "Fieldset",
      variants: {
        horizontal: {
          true: {
            flexDirection: "row",
            alignItems: "center"
          }
        }
      }
    });
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Form.js
var require_Form = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Form.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Form_exports = {};
    __export2(Form_exports, {
      Form: () => Form
    });
    module2.exports = __toCommonJS2(Form_exports);
    var import_core4 = require("@tamagui/core-node");
    var Form = (0, import_core4.styled)(import_core4.Stack, {
      name: "Form",
      tag: "form"
    });
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Grid.js
var require_Grid = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Grid.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Grid_exports = {};
    __export2(Grid_exports, {
      Grid: () => Grid
    });
    module2.exports = __toCommonJS2(Grid_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var import_react = __toESM2(require("react"));
    function Grid({ children, columns, itemMinWidth = 200, gap }) {
      if (import_core4.isWeb) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          style: {
            gap,
            display: "grid",
            justifyContent: "stretch",
            gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
          },
          children
        });
      }
      const childrenList = import_react.default.Children.toArray(children);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.XStack, {
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        children: childrenList.map((child, i) => {
          if (!child) {
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.XStack, {
            flex: 1,
            minWidth: itemMinWidth,
            marginRight: gap,
            marginBottom: gap,
            children: child
          }, i);
        })
      });
    }
    __name(Grid, "Grid");
  }
});

// ../../node_modules/tamagui/dist/cjs/helpers/inputHelpers.js
var require_inputHelpers = __commonJS({
  "../../node_modules/tamagui/dist/cjs/helpers/inputHelpers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var inputHelpers_exports = {};
    __export2(inputHelpers_exports, {
      inputSizeVariant: () => inputSizeVariant,
      textAreaSizeVariant: () => textAreaSizeVariant
    });
    module2.exports = __toCommonJS2(inputHelpers_exports);
    var import_core4 = require("@tamagui/core-node");
    var inputSizeVariant = /* @__PURE__ */ __name((val = "$4", extras) => {
      if (extras.props.multiline || extras.props.numberOfLines > 1) {
        return textAreaSizeVariant(val, extras);
      }
      const buttonStyles = (0, import_core4.getButtonSize)(val, extras);
      const paddingHorizontal = (0, import_core4.stepTokenUpOrDown)(extras.tokens.space, val, -1, [2]);
      const fontStyle = (0, import_core4.getFont)(val, extras);
      if (!import_core4.isWeb && fontStyle) {
        delete fontStyle["lineHeight"];
      }
      return {
        ...fontStyle,
        ...buttonStyles,
        paddingHorizontal
      };
    }, "inputSizeVariant");
    var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$4", extras) => {
      const { props } = extras;
      const buttonStyles = (0, import_core4.getButtonSize)(val, extras);
      const fontStyle = (0, import_core4.getFont)(val, extras);
      const minHeight = (props.numberOfLines || 1) * (0, import_core4.getVariableValue)(fontStyle.lineHeight);
      const paddingVertical = (0, import_core4.stepTokenUpOrDown)(extras.tokens.space, val, -2, [2]);
      const paddingHorizontal = (0, import_core4.stepTokenUpOrDown)(extras.tokens.space, val, -1, [2]);
      return {
        ...buttonStyles,
        ...fontStyle,
        paddingVertical,
        paddingHorizontal,
        minHeight
      };
    }, "textAreaSizeVariant");
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Input.js
var require_Input = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Input.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Input_exports = {};
    __export2(Input_exports, {
      Input: () => Input,
      InputFrame: () => InputFrame
    });
    module2.exports = __toCommonJS2(Input_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_focusable = require_cjs26();
    var import_react_native3 = require("react-native-web-lite");
    var import_inputHelpers = require_inputHelpers();
    var InputFrame = (0, import_core4.styled)(
      import_react_native3.TextInput,
      {
        name: "Input",
        fontFamily: "$body",
        borderWidth: 1,
        color: "$color",
        focusable: true,
        borderColor: "$borderColor",
        backgroundColor: "$background",
        minWidth: 0,
        hoverStyle: {
          borderColor: "$borderColorHover"
        },
        focusStyle: {
          borderColor: "$borderColorFocus",
          borderWidth: 2,
          marginHorizontal: -1
        },
        variants: {
          size: {
            "...size": import_inputHelpers.inputSizeVariant
          }
        },
        defaultVariants: {
          size: "$4"
        }
      },
      {
        isInput: true
      }
    );
    var Input = InputFrame.extractable((0, import_focusable.focusableInputHOC)(InputFrame));
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Group.js
var require_Group = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Group.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Group_exports = {};
    __export2(Group_exports, {
      GroupFrame: () => GroupFrame,
      XGroup: () => XGroup,
      YGroup: () => YGroup
    });
    module2.exports = __toCommonJS2(Group_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var GroupFrame = (0, import_core4.styled)(import_stacks.ThemeableStack, {
      name: "GroupFrame",
      backgroundColor: "$background",
      y: 0,
      overflow: "hidden",
      variants: {
        size: (val, { tokens: tokens2 }) => {
          const borderRadius = tokens2.radius[val] ?? val ?? tokens2.radius["$4"];
          return {
            borderRadius
          };
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    function createGroup(verticalDefault) {
      return GroupFrame.extractable(
        (0, import_react.forwardRef)((props, ref) => {
          const activeProps = (0, import_core4.useMediaPropsActive)(props);
          const {
            children: childrenProp,
            space: space2,
            size: size2 = "$4",
            spaceDirection,
            separator,
            scrollable,
            vertical = verticalDefault,
            disabled: disabledProp,
            disablePassBorderRadius: disablePassBorderRadiusProp,
            disablePassSize: disablePassSizeProp,
            borderRadius,
            ...restProps
          } = (0, import_core4.getExpandedShorthands)(activeProps);
          const radius2 = borderRadius ?? (size2 ? (0, import_core4.getVariableValue)((0, import_core4.getTokens)(true).radius[size2]) - 1 : void 0);
          const hasRadius = radius2 !== void 0;
          const disablePassBorderRadius = disablePassBorderRadiusProp ?? !hasRadius;
          const childrens = import_react.Children.toArray(childrenProp);
          const disablePassSize = disablePassSizeProp ?? size2 === void 0;
          const children = childrens.map((child, i) => {
            if (!(0, import_react.isValidElement)(child))
              return child;
            const disabled = child.props.disabled ?? disabledProp;
            const isFirst = i === 0;
            const isLast = i === childrens.length - 1;
            const props2 = {
              disabled,
              ...!disablePassSize && {
                size: size2
              },
              ...!disablePassBorderRadius && {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                ...hasRadius && {
                  ...isFirst && !vertical && {
                    borderTopLeftRadius: radius2,
                    borderBottomLeftRadius: radius2
                  },
                  ...isFirst && vertical && {
                    borderTopLeftRadius: radius2,
                    borderTopRightRadius: radius2
                  },
                  ...isLast && !vertical && {
                    borderTopRightRadius: radius2,
                    borderBottomRightRadius: radius2
                  },
                  ...isLast && vertical && {
                    borderBottomLeftRadius: radius2,
                    borderBottomRightRadius: radius2
                  }
                }
              }
            };
            return cloneElementWithPropOrder(child, props2);
          });
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupFrame, {
            ref,
            size: size2,
            flexDirection: !vertical ? "row" : "column",
            borderRadius,
            ...restProps,
            children: wrapScroll(
              !!scrollable,
              !!vertical,
              (0, import_core4.spacedChildren)({
                direction: spaceDirection,
                separator,
                space: space2,
                children
              })
            )
          });
        })
      );
    }
    __name(createGroup, "createGroup");
    var YGroup = createGroup(true);
    var XGroup = createGroup(false);
    var wrapScroll = /* @__PURE__ */ __name((scrollable, vertical, children) => {
      if (scrollable)
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native3.ScrollView, {
          ...vertical && {
            showsVerticalScrollIndicator: false
          },
          ...!vertical && {
            horizontal: true,
            showsHorizontalScrollIndicator: false
          },
          children
        });
      return children;
    }, "wrapScroll");
    var cloneElementWithPropOrder = /* @__PURE__ */ __name((child, props) => {
      const next = (0, import_core4.mergeProps)(child.props, props, false, (0, import_core4.getConfig)().shorthands)[0];
      return import_react.default.cloneElement({ ...child, props: null }, next);
    }, "cloneElementWithPropOrder");
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Layouts.js
var require_Layouts = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Layouts.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Layouts_exports = {};
    __export2(Layouts_exports, {
      Article: () => Article,
      Aside: () => Aside,
      Footer: () => Footer,
      Header: () => Header,
      Main: () => Main,
      Nav: () => Nav,
      Section: () => Section
    });
    module2.exports = __toCommonJS2(Layouts_exports);
    var import_core4 = require("@tamagui/core-node");
    var Section = (0, import_core4.styled)(import_core4.Stack, {
      name: "Section",
      tag: "section",
      flexDirection: "column",
      accessibilityRole: "summary"
    });
    var Article = (0, import_core4.styled)(import_core4.Stack, {
      name: "Article",
      tag: "article",
      flexDirection: "column"
    });
    var Main = (0, import_core4.styled)(import_core4.Stack, {
      name: "Main",
      tag: "main",
      flexDirection: "column"
    });
    var Header = (0, import_core4.styled)(import_core4.Stack, {
      name: "Header",
      tag: "header",
      accessibilityRole: "header",
      flexDirection: "column"
    });
    var Aside = (0, import_core4.styled)(import_core4.Stack, {
      name: "Aside",
      tag: "aside",
      flexDirection: "column"
    });
    var Footer = (0, import_core4.styled)(import_core4.Stack, {
      name: "Footer",
      tag: "footer",
      flexDirection: "column"
    });
    var Nav = (0, import_core4.styled)(import_core4.Stack, {
      name: "Nav",
      tag: "nav",
      flexDirection: "column"
    });
  }
});

// ../../node_modules/expo-linear-gradient/build/NativeLinearGradient.js
function NativeLinearGradient(props) {
  const { colors, locations, startPoint, endPoint, ...viewProps } = props;
  console.warn("LinearGradient is not available on this platform");
  return React.createElement(import_react_native.View, { ...viewProps });
}
var React, import_react_native;
var init_NativeLinearGradient = __esm({
  "../../node_modules/expo-linear-gradient/build/NativeLinearGradient.js"() {
    React = __toESM(require("react"));
    import_react_native = require("react-native-web-lite");
    __name(NativeLinearGradient, "NativeLinearGradient");
  }
});

// ../../node_modules/expo-linear-gradient/build/LinearGradient.js
var LinearGradient_exports = {};
__export(LinearGradient_exports, {
  LinearGradient: () => LinearGradient2
});
function _normalizePoint(point) {
  if (!point) {
    return void 0;
  }
  if (Array.isArray(point) && point.length !== 2) {
    console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}");
    return void 0;
  }
  return Array.isArray(point) ? point : [point.x, point.y];
}
var React2, import_react_native2, LinearGradient2;
var init_LinearGradient = __esm({
  "../../node_modules/expo-linear-gradient/build/LinearGradient.js"() {
    React2 = __toESM(require("react"));
    import_react_native2 = require("react-native-web-lite");
    init_NativeLinearGradient();
    LinearGradient2 = class extends React2.Component {
      render() {
        const { colors, locations, start, end, ...props } = this.props;
        let resolvedLocations = locations;
        if (locations && colors.length !== locations.length) {
          console.warn("LinearGradient colors and locations props should be arrays of the same length");
          resolvedLocations = locations.slice(0, colors.length);
        }
        return React2.createElement(NativeLinearGradient, { ...props, colors: import_react_native2.Platform.select({
          web: colors,
          default: colors.map(import_react_native2.processColor)
        }), locations: resolvedLocations, startPoint: _normalizePoint(start), endPoint: _normalizePoint(end) });
      }
    };
    __name(LinearGradient2, "LinearGradient");
    __name(_normalizePoint, "_normalizePoint");
  }
});

// ../../node_modules/tamagui/dist/cjs/lib/linear-gradient.js
var require_linear_gradient = __commonJS({
  "../../node_modules/tamagui/dist/cjs/lib/linear-gradient.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var linear_gradient_exports = {};
    __export2(linear_gradient_exports, {
      LinearGradient: () => import_expo_linear_gradient.LinearGradient
    });
    module2.exports = __toCommonJS2(linear_gradient_exports);
    var import_expo_linear_gradient = (init_LinearGradient(), __toCommonJS(LinearGradient_exports));
  }
});

// ../../node_modules/tamagui/dist/cjs/views/LinearGradient.js
var require_LinearGradient = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/LinearGradient.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LinearGradient_exports2 = {};
    __export2(LinearGradient_exports2, {
      LinearGradient: () => LinearGradient3
    });
    module2.exports = __toCommonJS2(LinearGradient_exports2);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var import_linear_gradient = require_linear_gradient();
    React3["createElement"];
    var LinearGradient3 = import_stacks.YStack.extractable(
      (0, import_core4.themeable)(
        React3.forwardRef((props, ref) => {
          const { start, end, colors: colorsProp, locations, children, ...stackProps } = props;
          const colors = useThemeColors(colorsProp || []);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearGradientFrame, {
            ref,
            ...stackProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_linear_gradient.LinearGradient, {
              start,
              end,
              colors,
              locations,
              style: [import_react_native3.StyleSheet.absoluteFill],
              children
            })
          });
        })
      )
    );
    var LinearGradientFrame = (0, import_core4.styled)(import_stacks.YStack, {
      name: "LinearGradient",
      overflow: "hidden",
      position: "relative"
    });
    var useThemeColors = /* @__PURE__ */ __name((colors) => {
      const theme = (0, import_core4.useTheme)();
      return colors.map((color2) => {
        if (color2[0] === "$") {
          return (0, import_core4.getVariable)(theme[color2] || color2);
        }
        return color2;
      });
    }, "useThemeColors");
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Spinner.js
var require_Spinner = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Spinner.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Spinner_exports = {};
    __export2(Spinner_exports, {
      Spinner: () => Spinner
    });
    module2.exports = __toCommonJS2(Spinner_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core4 = require("@tamagui/core-node");
    var import_stacks = require_cjs8();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    React3["createElement"];
    var Spinner = import_stacks.YStack.extractable(
      (0, import_core4.themeable)(
        React3.forwardRef((props, ref) => {
          const { size: size2, color: colorProp, ...stackProps } = props;
          const theme = (0, import_core4.useTheme)();
          let color2 = colorProp;
          if (color2 && color2[0] === "$") {
            color2 = (0, import_core4.variableToString)(theme[color2]);
          }
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
            ref,
            ...stackProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native3.ActivityIndicator, {
              size: size2,
              color: color2
            })
          });
        })
      )
    );
  }
});

// ../../node_modules/tamagui/dist/cjs/views/TextArea.js
var require_TextArea = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/TextArea.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TextArea_exports = {};
    __export2(TextArea_exports, {
      TextArea: () => TextArea,
      TextAreaFrame: () => TextAreaFrame
    });
    module2.exports = __toCommonJS2(TextArea_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_focusable = require_cjs26();
    var import_inputHelpers = require_inputHelpers();
    var import_Input = require_Input();
    var TextAreaFrame = (0, import_core4.styled)(import_Input.InputFrame, {
      name: "TextArea",
      multiline: true,
      numberOfLines: 4,
      height: "auto",
      focusStyle: {
        marginHorizontal: -1,
        borderColor: "$borderColorFocus",
        borderWidth: 2
      },
      variants: {
        size: {
          "...size": import_inputHelpers.textAreaSizeVariant
        }
      }
    });
    var TextArea = import_Input.InputFrame.extractable((0, import_focusable.focusableInputHOC)(TextAreaFrame));
  }
});

// ../../node_modules/tamagui/dist/cjs/index.js
var require_cjs41 = __commonJS({
  "../../node_modules/tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      FontLanguage: () => import_core4.FontLanguage,
      Spacer: () => import_core4.Spacer,
      Stack: () => import_core4.Stack,
      Text: () => import_core4.Text,
      TextAncestorContext: () => import_core4.TextAncestorContext,
      Theme: () => import_core4.Theme,
      ThemeInverse: () => import_core4.ThemeInverse,
      ThemeReset: () => import_core4.ThemeReset,
      Unspaced: () => import_core4.Unspaced,
      addMediaQueryListener: () => import_core4.addMediaQueryListener,
      addTheme: () => import_core4.addTheme,
      calc: () => import_core4.calc,
      createComponent: () => import_core4.createComponent,
      createFont: () => import_core4.createFont,
      createShorthands: () => import_core4.createShorthands,
      createTamagui: () => import_core4.createTamagui,
      createTheme: () => import_core4.createTheme,
      createTokens: () => import_core4.createTokens,
      createVariable: () => import_core4.createVariable,
      getAnimationDriver: () => import_core4.getAnimationDriver,
      getConfig: () => import_core4.getConfig,
      getHasConfigured: () => import_core4.getHasConfigured,
      getMedia: () => import_core4.getMedia,
      getStylesAtomic: () => import_core4.getStylesAtomic,
      getThemes: () => import_core4.getThemes,
      getTokens: () => import_core4.getTokens,
      getVariable: () => import_core4.getVariable,
      getVariableName: () => import_core4.getVariableName,
      getVariableValue: () => import_core4.getVariableValue,
      insertFont: () => import_core4.insertFont,
      isChrome: () => import_core4.isChrome,
      isClient: () => import_core4.isClient,
      isObj: () => import_core4.isObj,
      isServer: () => import_core4.isServer,
      isTamaguiComponent: () => import_core4.isTamaguiComponent,
      isTamaguiElement: () => import_core4.isTamaguiElement,
      isTouchable: () => import_core4.isTouchable,
      isVariable: () => import_core4.isVariable,
      isWeb: () => import_core4.isWeb,
      isWebTouchable: () => import_core4.isWebTouchable,
      matchMedia: () => import_core4.matchMedia,
      mediaObjectToString: () => import_core4.mediaObjectToString,
      mediaQueryConfig: () => import_core4.mediaQueryConfig,
      mediaState: () => import_core4.mediaState,
      removeMediaQueryListener: () => import_core4.removeMediaQueryListener,
      spacedChildren: () => import_core4.spacedChildren,
      styled: () => import_core4.styled,
      themeable: () => import_core4.themeable,
      updateTheme: () => import_core4.updateTheme,
      useConstant: () => import_core4.useConstant,
      useDefaultThemeName: () => import_core4.useDefaultThemeName,
      useEvent: () => import_core4.useEvent,
      useGet: () => import_core4.useGet,
      useIsMounted: () => import_core4.useIsMounted,
      useIsTouchDevice: () => import_core4.useIsTouchDevice,
      useIsomorphicLayoutEffect: () => import_core4.useIsomorphicLayoutEffect,
      useMedia: () => import_core4.useMedia,
      usePressable: () => import_core4.usePressable,
      useSafeRef: () => import_core4.useSafeRef,
      useTheme: () => import_core4.useTheme,
      useThemeName: () => import_core4.useThemeName,
      useUnmountEffect: () => import_core4.useUnmountEffect,
      variableToString: () => import_core4.variableToString,
      withStaticProperties: () => import_core4.withStaticProperties
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_polyfills = require_polyfills();
    __reExport2(src_exports, require_cjs(), module2.exports);
    __reExport2(src_exports, require_cjs16(), module2.exports);
    __reExport2(src_exports, require_cjs19(), module2.exports);
    __reExport2(src_exports, require_cjs24(), module2.exports);
    __reExport2(src_exports, require_cjs25(), module2.exports);
    __reExport2(src_exports, require_cjs2(), module2.exports);
    __reExport2(src_exports, require_cjs3(), module2.exports);
    __reExport2(src_exports, require_cjs15(), module2.exports);
    __reExport2(src_exports, require_cjs20(), module2.exports);
    __reExport2(src_exports, require_cjs23(), module2.exports);
    __reExport2(src_exports, require_cjs17(), module2.exports);
    __reExport2(src_exports, require_cjs27(), module2.exports);
    __reExport2(src_exports, require_cjs28(), module2.exports);
    __reExport2(src_exports, require_cjs30(), module2.exports);
    __reExport2(src_exports, require_cjs29(), module2.exports);
    __reExport2(src_exports, require_cjs9(), module2.exports);
    __reExport2(src_exports, require_cjs31(), module2.exports);
    __reExport2(src_exports, require_cjs12(), module2.exports);
    __reExport2(src_exports, require_cjs33(), module2.exports);
    __reExport2(src_exports, require_cjs32(), module2.exports);
    __reExport2(src_exports, require_cjs18(), module2.exports);
    __reExport2(src_exports, require_cjs13(), module2.exports);
    __reExport2(src_exports, require_cjs35(), module2.exports);
    __reExport2(src_exports, require_cjs8(), module2.exports);
    __reExport2(src_exports, require_cjs36(), module2.exports);
    __reExport2(src_exports, require_cjs14(), module2.exports);
    __reExport2(src_exports, require_cjs37(), module2.exports);
    __reExport2(src_exports, require_cjs11(), module2.exports);
    __reExport2(src_exports, require_cjs38(), module2.exports);
    __reExport2(src_exports, require_cjs39(), module2.exports);
    __reExport2(src_exports, require_cjs40(), module2.exports);
    __reExport2(src_exports, require_TamaguiProvider(), module2.exports);
    __reExport2(src_exports, require_viewTypes(), module2.exports);
    __reExport2(src_exports, require_Anchor(), module2.exports);
    __reExport2(src_exports, require_EnsureFlexed(), module2.exports);
    __reExport2(src_exports, require_Fieldset(), module2.exports);
    __reExport2(src_exports, require_Form(), module2.exports);
    __reExport2(src_exports, require_Grid(), module2.exports);
    __reExport2(src_exports, require_Input(), module2.exports);
    __reExport2(src_exports, require_Group(), module2.exports);
    __reExport2(src_exports, require_Layouts(), module2.exports);
    __reExport2(src_exports, require_LinearGradient(), module2.exports);
    __reExport2(src_exports, require_Spinner(), module2.exports);
    __reExport2(src_exports, require_TextArea(), module2.exports);
    var import_core4 = require("@tamagui/core-node");
  }
});

// ../../packages/ui/dist/cjs/MyComponent.js
var require_MyComponent = __commonJS({
  "../../packages/ui/dist/cjs/MyComponent.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var MyComponent_exports = {};
    __export2(MyComponent_exports, {
      MyComponent: () => MyComponent
    });
    module2.exports = __toCommonJS2(MyComponent_exports);
    var import_tamagui2 = require_cjs41();
    var MyComponent = (0, import_tamagui2.styled)(import_tamagui2.YStack, {
      name: "MyComponent",
      bc: "red"
    });
  }
});

// ../../packages/ui/dist/cjs/index.js
var require_cjs42 = __commonJS({
  "../../packages/ui/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_cjs41(), module2.exports);
    __reExport2(src_exports, require_MyComponent(), module2.exports);
  }
});

// ../../node_modules/@tamagui/font-inter/dist/cjs/index.js
var require_cjs43 = __commonJS({
  "../../node_modules/@tamagui/font-inter/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      createInterFont: () => createInterFont2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core4 = require("@tamagui/core-node");
    var import_react_native3 = require("react-native-web-lite");
    var createInterFont2 = /* @__PURE__ */ __name((font = {}, {
      sizeLineHeight = /* @__PURE__ */ __name((size2) => size2 + 10, "sizeLineHeight"),
      sizeSize = /* @__PURE__ */ __name((size2) => size2 * 1, "sizeSize")
    } = {}) => {
      const size2 = Object.fromEntries(
        Object.entries({
          ...defaultSizes,
          ...font.size
        }).map(([k, v]) => [k, sizeSize(+v)])
      );
      return (0, import_core4.createFont)({
        family: import_react_native3.Platform.OS == "web" ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
        lineHeight: Object.fromEntries(
          Object.entries(size2).map(([k, v]) => [k, sizeLineHeight((0, import_core4.getVariableValue)(v))])
        ),
        weight: {
          4: "300"
        },
        letterSpacing: {
          4: 0
        },
        ...font,
        size: size2
      });
    }, "createInterFont");
    var defaultSizes = {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 23,
      9: 30,
      10: 46,
      11: 55,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 134
    };
  }
});

// ../../node_modules/@tamagui/shorthands/dist/cjs/index.js
var require_cjs44 = __commonJS({
  "../../node_modules/@tamagui/shorthands/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      shorthands: () => shorthands2
    });
    module2.exports = __toCommonJS2(src_exports);
    var shorthands2 = {
      ac: "alignContent",
      ai: "alignItems",
      als: "alignSelf",
      b: "bottom",
      bc: "backgroundColor",
      bbc: "borderBottomColor",
      bblr: "borderBottomLeftRadius",
      bbrr: "borderBottomRightRadius",
      bbw: "borderBottomWidth",
      bg: "backgroundColor",
      blc: "borderLeftColor",
      bls: "borderLeftStyle",
      blw: "borderLeftWidth",
      boc: "borderColor",
      boxs: "boxSizing",
      boxsh: "boxShadow",
      br: "borderRadius",
      bs: "borderStyle",
      brw: "borderRightWidth",
      brc: "borderRightColor",
      btc: "borderTopColor",
      btlr: "borderTopLeftRadius",
      btrr: "borderTopRightRadius",
      btw: "borderTopWidth",
      bw: "borderWidth",
      col: "color",
      cur: "cursor",
      dsp: "display",
      f: "flex",
      fb: "flexBasis",
      fd: "flexDirection",
      fg: "flexGrow",
      ff: "fontFamily",
      fos: "fontSize",
      fost: "fontStyle",
      fow: "fontWeight",
      fs: "flexShrink",
      fw: "flexWrap",
      h: "height",
      jc: "justifyContent",
      l: "left",
      ls: "letterSpacing",
      lh: "lineHeight",
      m: "margin",
      mah: "maxHeight",
      maw: "maxWidth",
      mb: "marginBottom",
      mih: "minHeight",
      miw: "minWidth",
      ml: "marginLeft",
      mr: "marginRight",
      mt: "marginTop",
      mx: "marginHorizontal",
      my: "marginVertical",
      o: "opacity",
      ov: "overflow",
      ovx: "overflowX",
      ovy: "overflowY",
      p: "padding",
      pb: "paddingBottom",
      pe: "pointerEvents",
      pl: "paddingLeft",
      pos: "position",
      pr: "paddingRight",
      pt: "paddingTop",
      px: "paddingHorizontal",
      py: "paddingVertical",
      r: "right",
      shac: "shadowColor",
      shar: "shadowRadius",
      shof: "shadowOffset",
      shop: "shadowOpacity",
      t: "top",
      ta: "textAlign",
      tt: "textTransform",
      ussel: "userSelect",
      w: "width",
      ww: "wordWrap",
      zi: "zIndex"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/amber.js
var require_amber = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/amber.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amber_exports = {};
    __export2(amber_exports, {
      amber: () => amber2
    });
    module2.exports = __toCommonJS2(amber_exports);
    var amber2 = {
      amber1: "hsl(36, 100%, 6.1%)",
      amber2: "hsl(35, 100%, 7.6%)",
      amber3: "hsl(32, 100%, 10.2%)",
      amber4: "hsl(32, 100%, 12.4%)",
      amber5: "hsl(33, 100%, 14.6%)",
      amber6: "hsl(35, 100%, 17.1%)",
      amber7: "hsl(35, 91.0%, 21.6%)",
      amber8: "hsl(36, 100%, 25.5%)",
      amber9: "hsl(39, 100%, 57.0%)",
      amber10: "hsl(43, 100%, 64.0%)",
      amber11: "hsl(39, 90.0%, 49.8%)",
      amber12: "hsl(39, 97.0%, 93.2%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/blue.js
var require_blue = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/blue.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blue_exports = {};
    __export2(blue_exports, {
      blue: () => blue3
    });
    module2.exports = __toCommonJS2(blue_exports);
    var blue3 = {
      blue1: "hsl(212, 35.0%, 9.2%)",
      blue2: "hsl(216, 50.0%, 11.8%)",
      blue3: "hsl(214, 59.4%, 15.3%)",
      blue4: "hsl(214, 65.8%, 17.9%)",
      blue5: "hsl(213, 71.2%, 20.2%)",
      blue6: "hsl(212, 77.4%, 23.1%)",
      blue7: "hsl(211, 85.1%, 27.4%)",
      blue8: "hsl(211, 89.7%, 34.1%)",
      blue9: "hsl(206, 100%, 50.0%)",
      blue10: "hsl(209, 100%, 60.6%)",
      blue11: "hsl(210, 100%, 66.1%)",
      blue12: "hsl(206, 98.0%, 95.8%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/bronze.js
var require_bronze = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/bronze.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronze_exports = {};
    __export2(bronze_exports, {
      bronze: () => bronze2
    });
    module2.exports = __toCommonJS2(bronze_exports);
    var bronze2 = {
      bronze1: "hsl(17, 10.0%, 8.8%)",
      bronze2: "hsl(15, 14.8%, 10.6%)",
      bronze3: "hsl(15, 16.3%, 14.3%)",
      bronze4: "hsl(16, 17.1%, 17.2%)",
      bronze5: "hsl(16, 17.6%, 19.6%)",
      bronze6: "hsl(16, 18.1%, 22.9%)",
      bronze7: "hsl(17, 18.8%, 28.8%)",
      bronze8: "hsl(17, 19.6%, 38.0%)",
      bronze9: "hsl(17, 20.0%, 54.0%)",
      bronze10: "hsl(18, 24.0%, 59.0%)",
      bronze11: "hsl(18, 35.0%, 68.5%)",
      bronze12: "hsl(18, 57.0%, 94.1%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/brown.js
var require_brown = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/brown.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brown_exports = {};
    __export2(brown_exports, {
      brown: () => brown2
    });
    module2.exports = __toCommonJS2(brown_exports);
    var brown2 = {
      brown1: "hsl(22, 15.0%, 8.7%)",
      brown2: "hsl(20, 28.3%, 10.4%)",
      brown3: "hsl(20, 28.0%, 14.0%)",
      brown4: "hsl(21, 28.4%, 16.5%)",
      brown5: "hsl(22, 28.7%, 18.9%)",
      brown6: "hsl(23, 29.0%, 22.3%)",
      brown7: "hsl(25, 29.5%, 27.8%)",
      brown8: "hsl(27, 30.1%, 35.9%)",
      brown9: "hsl(28, 34.0%, 51.0%)",
      brown10: "hsl(28, 41.4%, 55.8%)",
      brown11: "hsl(28, 60.0%, 64.5%)",
      brown12: "hsl(30, 67.0%, 94.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/crimson.js
var require_crimson = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/crimson.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimson_exports = {};
    __export2(crimson_exports, {
      crimson: () => crimson2
    });
    module2.exports = __toCommonJS2(crimson_exports);
    var crimson2 = {
      crimson1: "hsl(335, 20.0%, 9.6%)",
      crimson2: "hsl(335, 32.2%, 11.6%)",
      crimson3: "hsl(335, 42.5%, 16.5%)",
      crimson4: "hsl(335, 47.2%, 19.3%)",
      crimson5: "hsl(335, 50.9%, 21.8%)",
      crimson6: "hsl(335, 55.7%, 25.3%)",
      crimson7: "hsl(336, 62.9%, 30.8%)",
      crimson8: "hsl(336, 74.9%, 39.0%)",
      crimson9: "hsl(336, 80.0%, 57.8%)",
      crimson10: "hsl(339, 84.1%, 62.6%)",
      crimson11: "hsl(341, 90.0%, 67.3%)",
      crimson12: "hsl(332, 87.0%, 96.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/cyan.js
var require_cyan = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/cyan.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyan_exports = {};
    __export2(cyan_exports, {
      cyan: () => cyan2
    });
    module2.exports = __toCommonJS2(cyan_exports);
    var cyan2 = {
      cyan1: "hsl(192, 60.0%, 7.2%)",
      cyan2: "hsl(192, 71.4%, 8.2%)",
      cyan3: "hsl(192, 75.9%, 10.8%)",
      cyan4: "hsl(192, 79.3%, 12.8%)",
      cyan5: "hsl(192, 82.5%, 14.6%)",
      cyan6: "hsl(192, 86.6%, 16.9%)",
      cyan7: "hsl(192, 92.6%, 20.1%)",
      cyan8: "hsl(192, 100%, 24.5%)",
      cyan9: "hsl(190, 95.0%, 39.0%)",
      cyan10: "hsl(188, 100%, 40.0%)",
      cyan11: "hsl(186, 100%, 42.2%)",
      cyan12: "hsl(185, 73.0%, 93.2%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/gold.js
var require_gold = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/gold.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gold_exports = {};
    __export2(gold_exports, {
      gold: () => gold2
    });
    module2.exports = __toCommonJS2(gold_exports);
    var gold2 = {
      gold1: "hsl(44, 9.0%, 8.3%)",
      gold2: "hsl(43, 14.3%, 9.6%)",
      gold3: "hsl(42, 15.5%, 13.0%)",
      gold4: "hsl(41, 16.4%, 15.6%)",
      gold5: "hsl(41, 16.9%, 17.8%)",
      gold6: "hsl(40, 17.6%, 20.8%)",
      gold7: "hsl(38, 18.5%, 26.4%)",
      gold8: "hsl(36, 19.6%, 35.1%)",
      gold9: "hsl(36, 20.0%, 49.5%)",
      gold10: "hsl(36, 22.3%, 54.5%)",
      gold11: "hsl(35, 30.0%, 64.0%)",
      gold12: "hsl(49, 52.0%, 93.8%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/grass.js
var require_grass = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/grass.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grass_exports = {};
    __export2(grass_exports, {
      grass: () => grass2
    });
    module2.exports = __toCommonJS2(grass_exports);
    var grass2 = {
      grass1: "hsl(146, 30.0%, 7.4%)",
      grass2: "hsl(136, 33.3%, 8.8%)",
      grass3: "hsl(137, 36.0%, 11.4%)",
      grass4: "hsl(137, 37.6%, 13.7%)",
      grass5: "hsl(136, 38.7%, 16.0%)",
      grass6: "hsl(135, 39.6%, 19.1%)",
      grass7: "hsl(134, 40.3%, 23.8%)",
      grass8: "hsl(131, 40.1%, 30.8%)",
      grass9: "hsl(131, 41.0%, 46.5%)",
      grass10: "hsl(131, 39.0%, 52.1%)",
      grass11: "hsl(131, 43.0%, 57.2%)",
      grass12: "hsl(137, 72.0%, 94.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/gray.js
var require_gray = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/gray.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gray_exports = {};
    __export2(gray_exports, {
      gray: () => gray3
    });
    module2.exports = __toCommonJS2(gray_exports);
    var gray3 = {
      gray1: "hsl(0, 0%, 8.5%)",
      gray2: "hsl(0, 0%, 11.0%)",
      gray3: "hsl(0, 0%, 13.6%)",
      gray4: "hsl(0, 0%, 15.8%)",
      gray5: "hsl(0, 0%, 17.9%)",
      gray6: "hsl(0, 0%, 20.5%)",
      gray7: "hsl(0, 0%, 24.3%)",
      gray8: "hsl(0, 0%, 31.2%)",
      gray9: "hsl(0, 0%, 43.9%)",
      gray10: "hsl(0, 0%, 49.4%)",
      gray11: "hsl(0, 0%, 62.8%)",
      gray12: "hsl(0, 0%, 93.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/green.js
var require_green = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/green.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var green_exports = {};
    __export2(green_exports, {
      green: () => green3
    });
    module2.exports = __toCommonJS2(green_exports);
    var green3 = {
      green1: "hsl(146, 30.0%, 7.4%)",
      green2: "hsl(155, 44.2%, 8.4%)",
      green3: "hsl(155, 46.7%, 10.9%)",
      green4: "hsl(154, 48.4%, 12.9%)",
      green5: "hsl(154, 49.7%, 14.9%)",
      green6: "hsl(154, 50.9%, 17.6%)",
      green7: "hsl(153, 51.8%, 21.8%)",
      green8: "hsl(151, 51.7%, 28.4%)",
      green9: "hsl(151, 55.0%, 41.5%)",
      green10: "hsl(151, 49.3%, 46.5%)",
      green11: "hsl(151, 50.0%, 53.2%)",
      green12: "hsl(137, 72.0%, 94.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/indigo.js
var require_indigo = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/indigo.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigo_exports = {};
    __export2(indigo_exports, {
      indigo: () => indigo2
    });
    module2.exports = __toCommonJS2(indigo_exports);
    var indigo2 = {
      indigo1: "hsl(229, 24.0%, 10.0%)",
      indigo2: "hsl(230, 36.4%, 12.9%)",
      indigo3: "hsl(228, 43.3%, 17.5%)",
      indigo4: "hsl(227, 47.2%, 21.0%)",
      indigo5: "hsl(227, 50.0%, 24.1%)",
      indigo6: "hsl(226, 52.9%, 28.2%)",
      indigo7: "hsl(226, 56.0%, 34.5%)",
      indigo8: "hsl(226, 58.2%, 44.1%)",
      indigo9: "hsl(226, 70.0%, 55.5%)",
      indigo10: "hsl(227, 75.2%, 61.6%)",
      indigo11: "hsl(228, 100%, 75.9%)",
      indigo12: "hsl(226, 83.0%, 96.3%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/lime.js
var require_lime = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/lime.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var lime_exports = {};
    __export2(lime_exports, {
      lime: () => lime2
    });
    module2.exports = __toCommonJS2(lime_exports);
    var lime2 = {
      lime1: "hsl(75, 55.0%, 6.0%)",
      lime2: "hsl(74, 56.8%, 7.3%)",
      lime3: "hsl(78, 50.2%, 9.9%)",
      lime4: "hsl(79, 50.3%, 12.1%)",
      lime5: "hsl(79, 52.6%, 14.2%)",
      lime6: "hsl(78, 55.7%, 16.7%)",
      lime7: "hsl(77, 59.7%, 20.1%)",
      lime8: "hsl(75, 64.8%, 24.5%)",
      lime9: "hsl(81, 67.0%, 50.0%)",
      lime10: "hsl(75, 85.0%, 60.0%)",
      lime11: "hsl(81, 70.0%, 43.8%)",
      lime12: "hsl(84, 79.0%, 92.6%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/mint.js
var require_mint = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/mint.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mint_exports = {};
    __export2(mint_exports, {
      mint: () => mint2
    });
    module2.exports = __toCommonJS2(mint_exports);
    var mint2 = {
      mint1: "hsl(173, 50.0%, 6.6%)",
      mint2: "hsl(176, 73.0%, 7.3%)",
      mint3: "hsl(175, 79.3%, 8.9%)",
      mint4: "hsl(174, 84.8%, 10.3%)",
      mint5: "hsl(174, 90.2%, 11.9%)",
      mint6: "hsl(173, 96.0%, 13.8%)",
      mint7: "hsl(172, 100%, 16.8%)",
      mint8: "hsl(170, 100%, 21.4%)",
      mint9: "hsl(167, 65.0%, 66.0%)",
      mint10: "hsl(163, 80.0%, 77.0%)",
      mint11: "hsl(167, 70.0%, 48.0%)",
      mint12: "hsl(165, 80.0%, 94.8%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/olive.js
var require_olive = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/olive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var olive_exports = {};
    __export2(olive_exports, {
      olive: () => olive2
    });
    module2.exports = __toCommonJS2(olive_exports);
    var olive2 = {
      olive1: "hsl(110, 5.0%, 8.6%)",
      olive2: "hsl(105, 7.4%, 10.6%)",
      olive3: "hsl(106, 6.4%, 13.1%)",
      olive4: "hsl(106, 5.8%, 15.3%)",
      olive5: "hsl(107, 5.3%, 17.4%)",
      olive6: "hsl(107, 4.9%, 19.9%)",
      olive7: "hsl(108, 4.4%, 23.6%)",
      olive8: "hsl(110, 3.8%, 30.6%)",
      olive9: "hsl(110, 6.0%, 42.5%)",
      olive10: "hsl(111, 4.8%, 48.2%)",
      olive11: "hsl(110, 5.0%, 61.8%)",
      olive12: "hsl(110, 6.0%, 93.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/orange.js
var require_orange = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/orange.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orange_exports = {};
    __export2(orange_exports, {
      orange: () => orange3
    });
    module2.exports = __toCommonJS2(orange_exports);
    var orange3 = {
      orange1: "hsl(30, 70.0%, 7.2%)",
      orange2: "hsl(28, 100%, 8.4%)",
      orange3: "hsl(26, 91.1%, 11.6%)",
      orange4: "hsl(25, 88.3%, 14.1%)",
      orange5: "hsl(24, 87.6%, 16.6%)",
      orange6: "hsl(24, 88.6%, 19.8%)",
      orange7: "hsl(24, 92.4%, 24.0%)",
      orange8: "hsl(25, 100%, 29.0%)",
      orange9: "hsl(24, 94.0%, 50.0%)",
      orange10: "hsl(24, 100%, 58.5%)",
      orange11: "hsl(24, 100%, 62.2%)",
      orange12: "hsl(24, 97.0%, 93.2%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/pink.js
var require_pink = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/pink.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pink_exports = {};
    __export2(pink_exports, {
      pink: () => pink3
    });
    module2.exports = __toCommonJS2(pink_exports);
    var pink3 = {
      pink1: "hsl(318, 25.0%, 9.6%)",
      pink2: "hsl(319, 32.2%, 11.6%)",
      pink3: "hsl(319, 41.0%, 16.0%)",
      pink4: "hsl(320, 45.4%, 18.7%)",
      pink5: "hsl(320, 49.0%, 21.1%)",
      pink6: "hsl(321, 53.6%, 24.4%)",
      pink7: "hsl(321, 61.1%, 29.7%)",
      pink8: "hsl(322, 74.9%, 37.5%)",
      pink9: "hsl(322, 65.0%, 54.5%)",
      pink10: "hsl(323, 72.8%, 59.2%)",
      pink11: "hsl(325, 90.0%, 66.4%)",
      pink12: "hsl(322, 90.0%, 95.8%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/plum.js
var require_plum = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/plum.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plum_exports = {};
    __export2(plum_exports, {
      plum: () => plum2
    });
    module2.exports = __toCommonJS2(plum_exports);
    var plum2 = {
      plum1: "hsl(301, 20.0%, 9.4%)",
      plum2: "hsl(300, 29.8%, 11.2%)",
      plum3: "hsl(298, 34.4%, 15.3%)",
      plum4: "hsl(297, 36.8%, 18.3%)",
      plum5: "hsl(296, 38.5%, 21.1%)",
      plum6: "hsl(295, 40.4%, 24.7%)",
      plum7: "hsl(294, 42.7%, 30.6%)",
      plum8: "hsl(292, 45.1%, 40.0%)",
      plum9: "hsl(292, 45.0%, 51.0%)",
      plum10: "hsl(295, 50.0%, 55.4%)",
      plum11: "hsl(300, 60.0%, 62.0%)",
      plum12: "hsl(296, 74.0%, 95.7%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/purple.js
var require_purple = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/purple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purple_exports = {};
    __export2(purple_exports, {
      purple: () => purple3
    });
    module2.exports = __toCommonJS2(purple_exports);
    var purple3 = {
      purple1: "hsl(284, 20.0%, 9.6%)",
      purple2: "hsl(283, 30.0%, 11.8%)",
      purple3: "hsl(281, 37.5%, 16.5%)",
      purple4: "hsl(280, 41.2%, 20.0%)",
      purple5: "hsl(279, 43.8%, 23.3%)",
      purple6: "hsl(277, 46.4%, 27.5%)",
      purple7: "hsl(275, 49.3%, 34.6%)",
      purple8: "hsl(272, 52.1%, 45.9%)",
      purple9: "hsl(272, 51.0%, 54.0%)",
      purple10: "hsl(273, 57.3%, 59.1%)",
      purple11: "hsl(275, 80.0%, 71.0%)",
      purple12: "hsl(279, 75.0%, 95.7%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/mauve.js
var require_mauve = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/mauve.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauve_exports = {};
    __export2(mauve_exports, {
      mauve: () => mauve2
    });
    module2.exports = __toCommonJS2(mauve_exports);
    var mauve2 = {
      mauve1: "hsl(246, 6.0%, 9.0%)",
      mauve2: "hsl(240, 5.1%, 11.6%)",
      mauve3: "hsl(241, 5.0%, 14.3%)",
      mauve4: "hsl(242, 4.9%, 16.5%)",
      mauve5: "hsl(243, 4.9%, 18.8%)",
      mauve6: "hsl(244, 4.9%, 21.5%)",
      mauve7: "hsl(245, 4.9%, 25.4%)",
      mauve8: "hsl(247, 4.8%, 32.5%)",
      mauve9: "hsl(252, 4.0%, 45.2%)",
      mauve10: "hsl(247, 3.4%, 50.7%)",
      mauve11: "hsl(253, 4.0%, 63.7%)",
      mauve12: "hsl(256, 6.0%, 93.2%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/red.js
var require_red = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/red.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var red_exports = {};
    __export2(red_exports, {
      red: () => red3
    });
    module2.exports = __toCommonJS2(red_exports);
    var red3 = {
      red1: "hsl(353, 23.0%, 9.8%)",
      red2: "hsl(357, 34.4%, 12.0%)",
      red3: "hsl(356, 43.4%, 16.4%)",
      red4: "hsl(356, 47.6%, 19.2%)",
      red5: "hsl(356, 51.1%, 21.9%)",
      red6: "hsl(356, 55.2%, 25.9%)",
      red7: "hsl(357, 60.2%, 31.8%)",
      red8: "hsl(358, 65.0%, 40.4%)",
      red9: "hsl(358, 75.0%, 59.0%)",
      red10: "hsl(358, 85.3%, 64.0%)",
      red11: "hsl(358, 100%, 69.5%)",
      red12: "hsl(351, 89.0%, 96.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/sage.js
var require_sage = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/sage.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sage_exports = {};
    __export2(sage_exports, {
      sage: () => sage2
    });
    module2.exports = __toCommonJS2(sage_exports);
    var sage2 = {
      sage1: "hsl(155, 7.0%, 8.4%)",
      sage2: "hsl(150, 7.4%, 10.6%)",
      sage3: "hsl(150, 6.7%, 13.1%)",
      sage4: "hsl(150, 6.4%, 15.3%)",
      sage5: "hsl(150, 6.1%, 17.4%)",
      sage6: "hsl(150, 5.8%, 19.9%)",
      sage7: "hsl(150, 5.5%, 23.6%)",
      sage8: "hsl(150, 5.1%, 30.6%)",
      sage9: "hsl(155, 6.0%, 42.5%)",
      sage10: "hsl(153, 4.8%, 48.2%)",
      sage11: "hsl(155, 5.0%, 61.8%)",
      sage12: "hsl(155, 6.0%, 93.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/sand.js
var require_sand = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/sand.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sand_exports = {};
    __export2(sand_exports, {
      sand: () => sand2
    });
    module2.exports = __toCommonJS2(sand_exports);
    var sand2 = {
      sand1: "hsl(61, 2.0%, 8.3%)",
      sand2: "hsl(60, 3.7%, 10.6%)",
      sand3: "hsl(58, 3.7%, 13.1%)",
      sand4: "hsl(57, 3.6%, 15.3%)",
      sand5: "hsl(56, 3.7%, 17.4%)",
      sand6: "hsl(55, 3.7%, 19.9%)",
      sand7: "hsl(53, 3.7%, 23.6%)",
      sand8: "hsl(50, 3.8%, 30.6%)",
      sand9: "hsl(50, 4.0%, 42.7%)",
      sand10: "hsl(52, 3.1%, 48.3%)",
      sand11: "hsl(50, 4.0%, 61.8%)",
      sand12: "hsl(56, 4.0%, 92.8%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/sky.js
var require_sky = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/sky.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sky_exports = {};
    __export2(sky_exports, {
      sky: () => sky2
    });
    module2.exports = __toCommonJS2(sky_exports);
    var sky2 = {
      sky1: "hsl(205, 45.0%, 8.6%)",
      sky2: "hsl(202, 71.4%, 9.6%)",
      sky3: "hsl(201, 74.6%, 12.2%)",
      sky4: "hsl(201, 77.4%, 14.4%)",
      sky5: "hsl(200, 80.3%, 16.5%)",
      sky6: "hsl(200, 84.1%, 18.9%)",
      sky7: "hsl(199, 90.2%, 22.1%)",
      sky8: "hsl(198, 100%, 26.1%)",
      sky9: "hsl(193, 98.0%, 70.0%)",
      sky10: "hsl(192, 100%, 77.0%)",
      sky11: "hsl(192, 85.0%, 55.8%)",
      sky12: "hsl(198, 98.0%, 95.8%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/slate.js
var require_slate = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/slate.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slate_exports = {};
    __export2(slate_exports, {
      slate: () => slate2
    });
    module2.exports = __toCommonJS2(slate_exports);
    var slate2 = {
      slate1: "hsl(200, 7.0%, 8.8%)",
      slate2: "hsl(195, 7.1%, 11.0%)",
      slate3: "hsl(197, 6.8%, 13.6%)",
      slate4: "hsl(198, 6.6%, 15.8%)",
      slate5: "hsl(199, 6.4%, 17.9%)",
      slate6: "hsl(201, 6.2%, 20.5%)",
      slate7: "hsl(203, 6.0%, 24.3%)",
      slate8: "hsl(207, 5.6%, 31.6%)",
      slate9: "hsl(206, 6.0%, 43.9%)",
      slate10: "hsl(206, 5.2%, 49.5%)",
      slate11: "hsl(206, 6.0%, 63.0%)",
      slate12: "hsl(210, 6.0%, 93.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/teal.js
var require_teal = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/teal.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var teal_exports = {};
    __export2(teal_exports, {
      teal: () => teal2
    });
    module2.exports = __toCommonJS2(teal_exports);
    var teal2 = {
      teal1: "hsl(168, 48.0%, 6.5%)",
      teal2: "hsl(169, 77.8%, 7.1%)",
      teal3: "hsl(170, 76.1%, 9.2%)",
      teal4: "hsl(171, 75.8%, 11.0%)",
      teal5: "hsl(171, 75.7%, 12.8%)",
      teal6: "hsl(172, 75.8%, 15.1%)",
      teal7: "hsl(172, 76.7%, 18.6%)",
      teal8: "hsl(173, 80.2%, 23.7%)",
      teal9: "hsl(173, 80.0%, 36.0%)",
      teal10: "hsl(174, 83.9%, 38.2%)",
      teal11: "hsl(174, 90.0%, 40.7%)",
      teal12: "hsl(166, 73.0%, 93.1%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/tomato.js
var require_tomato = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/tomato.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomato_exports = {};
    __export2(tomato_exports, {
      tomato: () => tomato2
    });
    module2.exports = __toCommonJS2(tomato_exports);
    var tomato2 = {
      tomato1: "hsl(10, 23.0%, 9.4%)",
      tomato2: "hsl(9, 44.8%, 11.4%)",
      tomato3: "hsl(8, 52.0%, 15.3%)",
      tomato4: "hsl(7, 56.3%, 18.0%)",
      tomato5: "hsl(7, 60.1%, 20.6%)",
      tomato6: "hsl(8, 64.8%, 24.0%)",
      tomato7: "hsl(8, 71.2%, 29.1%)",
      tomato8: "hsl(10, 80.2%, 35.7%)",
      tomato9: "hsl(10, 78.0%, 54.0%)",
      tomato10: "hsl(10, 81.7%, 59.0%)",
      tomato11: "hsl(10, 85.0%, 62.8%)",
      tomato12: "hsl(10, 89.0%, 96.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/violet.js
var require_violet = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/violet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violet_exports = {};
    __export2(violet_exports, {
      violet: () => violet2
    });
    module2.exports = __toCommonJS2(violet_exports);
    var violet2 = {
      violet1: "hsl(250, 20.0%, 10.2%)",
      violet2: "hsl(255, 30.3%, 12.9%)",
      violet3: "hsl(253, 37.0%, 18.4%)",
      violet4: "hsl(252, 40.1%, 22.5%)",
      violet5: "hsl(252, 42.2%, 26.2%)",
      violet6: "hsl(251, 44.3%, 31.1%)",
      violet7: "hsl(250, 46.8%, 38.9%)",
      violet8: "hsl(250, 51.8%, 51.2%)",
      violet9: "hsl(252, 56.0%, 57.5%)",
      violet10: "hsl(251, 63.2%, 63.2%)",
      violet11: "hsl(250, 95.0%, 76.8%)",
      violet12: "hsl(252, 87.0%, 96.4%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/yellow.js
var require_yellow = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/yellow.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellow_exports = {};
    __export2(yellow_exports, {
      yellow: () => yellow3
    });
    module2.exports = __toCommonJS2(yellow_exports);
    var yellow3 = {
      yellow1: "hsl(45, 100%, 5.5%)",
      yellow2: "hsl(46, 100%, 6.7%)",
      yellow3: "hsl(45, 100%, 8.7%)",
      yellow4: "hsl(45, 100%, 10.4%)",
      yellow5: "hsl(47, 100%, 12.1%)",
      yellow6: "hsl(49, 100%, 14.3%)",
      yellow7: "hsl(49, 90.3%, 18.4%)",
      yellow8: "hsl(50, 100%, 22.0%)",
      yellow9: "hsl(53, 92.0%, 50.0%)",
      yellow10: "hsl(54, 100%, 68.0%)",
      yellow11: "hsl(48, 100%, 47.0%)",
      yellow12: "hsl(53, 100%, 91.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/amberA.js
var require_amberA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/amberA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amberA_exports = {};
    __export2(amberA_exports, {
      amberA: () => amberA2
    });
    module2.exports = __toCommonJS2(amberA_exports);
    var amberA2 = {
      amberA1: "hsla(0, 0%, 0%, 0)",
      amberA2: "hsla(31, 100%, 49.7%, 0.036)",
      amberA3: "hsla(27, 100%, 49.9%, 0.094)",
      amberA4: "hsla(29, 100%, 50.0%, 0.143)",
      amberA5: "hsla(31, 100%, 50.0%, 0.192)",
      amberA6: "hsla(35, 100%, 50.0%, 0.250)",
      amberA7: "hsla(34, 99.6%, 52.9%, 0.331)",
      amberA8: "hsla(36, 100%, 50.0%, 0.442)",
      amberA9: "hsla(40, 100%, 57.2%, 0.980)",
      amberA10: "hsla(44, 100%, 64.2%, 0.980)",
      amberA11: "hsla(39, 99.9%, 52.7%, 0.938)",
      amberA12: "hsla(45, 100%, 94.2%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/blueA.js
var require_blueA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/blueA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blueA_exports = {};
    __export2(blueA_exports, {
      blueA: () => blueA2
    });
    module2.exports = __toCommonJS2(blueA_exports);
    var blueA2 = {
      blueA1: "hsla(0, 0%, 0%, 0)",
      blueA2: "hsla(221, 97.8%, 52.4%, 0.059)",
      blueA3: "hsla(215, 99.3%, 54.2%, 0.135)",
      blueA4: "hsla(215, 99.3%, 53.8%, 0.198)",
      blueA5: "hsla(213, 99.4%, 52.8%, 0.252)",
      blueA6: "hsla(212, 99.9%, 51.7%, 0.323)",
      blueA7: "hsla(211, 100%, 50.7%, 0.435)",
      blueA8: "hsla(211, 99.8%, 50.9%, 0.597)",
      blueA9: "hsla(205, 100%, 50.0%, 0.980)",
      blueA10: "hsla(208, 100%, 60.7%, 0.980)",
      blueA11: "hsla(209, 100%, 66.3%, 0.980)",
      blueA12: "hsla(196, 100%, 96.8%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/bronzeA.js
var require_bronzeA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/bronzeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronzeA_exports = {};
    __export2(bronzeA_exports, {
      bronzeA: () => bronzeA2
    });
    module2.exports = __toCommonJS2(bronzeA_exports);
    var bronzeA2 = {
      bronzeA1: "hsla(0, 0%, 0%, 0)",
      bronzeA2: "hsla(20, 88.2%, 74.2%, 0.027)",
      bronzeA3: "hsla(10, 99.4%, 83.0%, 0.074)",
      bronzeA4: "hsla(18, 96.0%, 81.1%, 0.114)",
      bronzeA5: "hsla(18, 99.4%, 81.7%, 0.148)",
      bronzeA6: "hsla(15, 98.1%, 82.4%, 0.192)",
      bronzeA7: "hsla(16, 99.2%, 82.9%, 0.270)",
      bronzeA8: "hsla(18, 99.5%, 82.6%, 0.396)",
      bronzeA9: "hsla(18, 99.3%, 85.0%, 0.592)",
      bronzeA10: "hsla(18, 99.6%, 85.2%, 0.657)",
      bronzeA11: "hsla(17, 99.9%, 86.1%, 0.774)",
      bronzeA12: "hsla(20, 99.8%, 96.4%, 0.974)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/brownA.js
var require_brownA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/brownA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brownA_exports = {};
    __export2(brownA_exports, {
      brownA: () => brownA2
    });
    module2.exports = __toCommonJS2(brownA_exports);
    var brownA2 = {
      brownA1: "hsla(0, 0%, 0%, 0)",
      brownA2: "hsla(22, 99.6%, 53.6%, 0.035)",
      brownA3: "hsla(18, 97.8%, 69.0%, 0.088)",
      brownA4: "hsla(21, 98.2%, 71.0%, 0.123)",
      brownA5: "hsla(25, 98.4%, 72.1%, 0.158)",
      brownA6: "hsla(25, 98.7%, 73.5%, 0.206)",
      brownA7: "hsla(25, 99.0%, 74.6%, 0.289)",
      brownA8: "hsla(28, 99.2%, 75.3%, 0.407)",
      brownA9: "hsla(28, 100%, 74.8%, 0.642)",
      brownA10: "hsla(28, 99.9%, 74.9%, 0.712)",
      brownA11: "hsla(28, 99.9%, 74.9%, 0.843)",
      brownA12: "hsla(32, 98.2%, 95.7%, 0.979)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/crimsonA.js
var require_crimsonA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/crimsonA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimsonA_exports = {};
    __export2(crimsonA_exports, {
      crimsonA: () => crimsonA2
    });
    module2.exports = __toCommonJS2(crimsonA_exports);
    var crimsonA2 = {
      crimsonA1: "hsla(0, 0%, 0%, 0)",
      crimsonA2: "hsla(336, 96.8%, 53.2%, 0.045)",
      crimsonA3: "hsla(335, 98.7%, 59.3%, 0.138)",
      crimsonA4: "hsla(336, 99.1%, 59.9%, 0.191)",
      crimsonA5: "hsla(335, 99.4%, 59.4%, 0.244)",
      crimsonA6: "hsla(335, 99.4%, 59.4%, 0.315)",
      crimsonA7: "hsla(336, 99.5%, 57.8%, 0.439)",
      crimsonA8: "hsla(336, 99.9%, 55.4%, 0.642)",
      crimsonA9: "hsla(336, 99.9%, 62.8%, 0.903)",
      crimsonA10: "hsla(339, 99.9%, 66.3%, 0.934)",
      crimsonA11: "hsla(341, 99.9%, 69.5%, 0.965)",
      crimsonA12: "hsla(327, 100%, 97.1%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/cyanA.js
var require_cyanA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/cyanA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyanA_exports = {};
    __export2(cyanA_exports, {
      cyanA: () => cyanA2
    });
    module2.exports = __toCommonJS2(cyanA_exports);
    var cyanA2 = {
      cyanA1: "hsla(0, 0%, 0%, 0)",
      cyanA2: "hsla(196, 100%, 50.0%, 0.031)",
      cyanA3: "hsla(192, 98.0%, 50.9%, 0.085)",
      cyanA4: "hsla(194, 99.6%, 51.3%, 0.133)",
      cyanA5: "hsla(192, 99.5%, 51.3%, 0.173)",
      cyanA6: "hsla(193, 99.7%, 50.4%, 0.226)",
      cyanA7: "hsla(192, 100%, 50.0%, 0.310)",
      cyanA8: "hsla(193, 100%, 50.0%, 0.425)",
      cyanA9: "hsla(190, 99.8%, 50.8%, 0.731)",
      cyanA10: "hsla(188, 100%, 50.0%, 0.775)",
      cyanA11: "hsla(186, 100%, 49.9%, 0.824)",
      cyanA12: "hsla(185, 99.8%, 95.1%, 0.978)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/goldA.js
var require_goldA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/goldA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var goldA_exports = {};
    __export2(goldA_exports, {
      goldA: () => goldA2
    });
    module2.exports = __toCommonJS2(goldA_exports);
    var goldA2 = {
      goldA1: "hsla(0, 0%, 0%, 0)",
      goldA2: "hsla(40, 93.7%, 70.6%, 0.022)",
      goldA3: "hsla(40, 97.5%, 80.6%, 0.065)",
      goldA4: "hsla(40, 95.9%, 80.8%, 0.100)",
      goldA5: "hsla(38, 97.3%, 82.1%, 0.130)",
      goldA6: "hsla(39, 97.2%, 82.5%, 0.169)",
      goldA7: "hsla(37, 99.3%, 82.4%, 0.246)",
      goldA8: "hsla(35, 98.7%, 82.2%, 0.363)",
      goldA9: "hsla(36, 99.7%, 82.8%, 0.552)",
      goldA10: "hsla(35, 99.2%, 83.7%, 0.613)",
      goldA11: "hsla(35, 99.3%, 85.3%, 0.725)",
      goldA12: "hsla(49, 98.6%, 96.7%, 0.966)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/grassA.js
var require_grassA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/grassA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grassA_exports = {};
    __export2(grassA_exports, {
      grassA: () => grassA2
    });
    module2.exports = __toCommonJS2(grassA_exports);
    var grassA2 = {
      grassA1: "hsla(0, 0%, 0%, 0)",
      grassA2: "hsla(107, 97.2%, 61.9%, 0.022)",
      grassA3: "hsla(128, 96.5%, 69.8%, 0.066)",
      grassA4: "hsla(130, 100%, 70.2%, 0.100)",
      grassA5: "hsla(130, 98.2%, 69.1%, 0.140)",
      grassA6: "hsla(132, 99.9%, 69.3%, 0.187)",
      grassA7: "hsla(132, 99.9%, 69.8%, 0.261)",
      grassA8: "hsla(130, 99.6%, 70.5%, 0.370)",
      grassA9: "hsla(130, 99.7%, 70.6%, 0.618)",
      grassA10: "hsla(131, 100%, 73.5%, 0.674)",
      grassA11: "hsla(130, 99.7%, 75.6%, 0.731)",
      grassA12: "hsla(137, 100%, 95.8%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/grayA.js
var require_grayA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/grayA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grayA_exports = {};
    __export2(grayA_exports, {
      grayA: () => grayA2
    });
    module2.exports = __toCommonJS2(grayA_exports);
    var grayA2 = {
      grayA1: "hsla(0, 0%, 100%, 0)",
      grayA2: "hsla(0, 0%, 100%, 0.026)",
      grayA3: "hsla(0, 0%, 100%, 0.056)",
      grayA4: "hsla(0, 0%, 100%, 0.077)",
      grayA5: "hsla(0, 0%, 100%, 0.103)",
      grayA6: "hsla(0, 0%, 100%, 0.129)",
      grayA7: "hsla(0, 0%, 100%, 0.172)",
      grayA8: "hsla(0, 0%, 100%, 0.249)",
      grayA9: "hsla(0, 0%, 100%, 0.386)",
      grayA10: "hsla(0, 0%, 100%, 0.446)",
      grayA11: "hsla(0, 0%, 100%, 0.592)",
      grayA12: "hsla(0, 0%, 100%, 0.923)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/greenA.js
var require_greenA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/greenA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var greenA_exports = {};
    __export2(greenA_exports, {
      greenA: () => greenA2
    });
    module2.exports = __toCommonJS2(greenA_exports);
    var greenA2 = {
      greenA1: "hsla(0, 0%, 0%, 0)",
      greenA2: "hsla(169, 100%, 48.5%, 0.027)",
      greenA3: "hsla(162, 98.7%, 57.9%, 0.070)",
      greenA4: "hsla(158, 98.6%, 59.7%, 0.105)",
      greenA5: "hsla(158, 98.6%, 60.7%, 0.140)",
      greenA6: "hsla(156, 99.9%, 62.0%, 0.187)",
      greenA7: "hsla(154, 99.5%, 63.1%, 0.257)",
      greenA8: "hsla(152, 99.7%, 64.2%, 0.370)",
      greenA9: "hsla(151, 99.7%, 63.8%, 0.605)",
      greenA10: "hsla(152, 99.9%, 66.5%, 0.661)",
      greenA11: "hsla(151, 99.7%, 69.2%, 0.740)",
      greenA12: "hsla(137, 100%, 95.8%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/indigoA.js
var require_indigoA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/indigoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigoA_exports = {};
    __export2(indigoA_exports, {
      indigoA: () => indigoA2
    });
    module2.exports = __toCommonJS2(indigoA_exports);
    var indigoA2 = {
      indigoA1: "hsla(0, 0%, 0%, 0)",
      indigoA2: "hsla(234, 97.4%, 59.9%, 0.059)",
      indigoA3: "hsla(228, 99.2%, 61.7%, 0.144)",
      indigoA4: "hsla(227, 99.7%, 62.0%, 0.211)",
      indigoA5: "hsla(227, 99.2%, 62.3%, 0.270)",
      indigoA6: "hsla(226, 99.9%, 62.1%, 0.350)",
      indigoA7: "hsla(226, 99.9%, 62.0%, 0.471)",
      indigoA8: "hsla(226, 99.9%, 62.1%, 0.655)",
      indigoA9: "hsla(226, 99.9%, 63.6%, 0.848)",
      indigoA10: "hsla(227, 99.8%, 67.7%, 0.893)",
      indigoA11: "hsla(227, 100%, 76.3%, 0.980)",
      indigoA12: "hsla(226, 100%, 97.5%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/limeA.js
var require_limeA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/limeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var limeA_exports = {};
    __export2(limeA_exports, {
      limeA: () => limeA2
    });
    module2.exports = __toCommonJS2(limeA_exports);
    var limeA2 = {
      limeA1: "hsla(0, 0%, 0%, 0)",
      limeA2: "hsla(75, 96.4%, 59.6%, 0.022)",
      limeA3: "hsla(88, 98.0%, 70.4%, 0.061)",
      limeA4: "hsla(81, 97.8%, 67.4%, 0.096)",
      limeA5: "hsla(82, 98.4%, 65.6%, 0.135)",
      limeA6: "hsla(79, 99.7%, 64.3%, 0.182)",
      limeA7: "hsla(77, 99.1%, 62.1%, 0.252)",
      limeA8: "hsla(75, 100%, 60.0%, 0.342)",
      limeA9: "hsla(81, 99.8%, 59.7%, 0.819)",
      limeA10: "hsla(75, 99.8%, 63.7%, 0.936)",
      limeA11: "hsla(81, 99.9%, 58.7%, 0.719)",
      limeA12: "hsla(83, 100%, 94.2%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/mintA.js
var require_mintA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/mintA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mintA_exports = {};
    __export2(mintA_exports, {
      mintA: () => mintA2
    });
    module2.exports = __toCommonJS2(mintA_exports);
    var mintA2 = {
      mintA1: "hsla(0, 0%, 0%, 0)",
      mintA2: "hsla(180, 100%, 49.2%, 0.031)",
      mintA3: "hsla(176, 100%, 49.7%, 0.070)",
      mintA4: "hsla(173, 100%, 49.7%, 0.105)",
      mintA5: "hsla(173, 100%, 49.8%, 0.144)",
      mintA6: "hsla(172, 100%, 49.8%, 0.192)",
      mintA7: "hsla(171, 100%, 49.9%, 0.266)",
      mintA8: "hsla(169, 100%, 49.9%, 0.366)",
      mintA9: "hsla(167, 99.8%, 75.0%, 0.870)",
      mintA10: "hsla(163, 99.9%, 80.7%, 0.948)",
      mintA11: "hsla(167, 99.9%, 58.7%, 0.796)",
      mintA12: "hsla(169, 100%, 96.2%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/oliveA.js
var require_oliveA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/oliveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var oliveA_exports = {};
    __export2(oliveA_exports, {
      oliveA: () => oliveA2
    });
    module2.exports = __toCommonJS2(oliveA_exports);
    var oliveA2 = {
      oliveA1: "hsla(0, 0%, 0%, 0)",
      oliveA2: "hsla(91, 97.0%, 84.0%, 0.026)",
      oliveA3: "hsla(101, 87.4%, 87.7%, 0.057)",
      oliveA4: "hsla(92, 91.8%, 94.1%, 0.078)",
      oliveA5: "hsla(101, 92.6%, 93.5%, 0.104)",
      oliveA6: "hsla(102, 91.1%, 94.6%, 0.130)",
      oliveA7: "hsla(102, 92.5%, 95.9%, 0.173)",
      oliveA8: "hsla(107, 100%, 96.5%, 0.250)",
      oliveA9: "hsla(110, 98.3%, 94.1%, 0.397)",
      oliveA10: "hsla(109, 99.6%, 95.3%, 0.457)",
      oliveA11: "hsla(113, 95.3%, 97.2%, 0.600)",
      oliveA12: "hsla(120, 93.5%, 99.6%, 0.927)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/orangeA.js
var require_orangeA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/orangeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orangeA_exports = {};
    __export2(orangeA_exports, {
      orangeA: () => orangeA2
    });
    module2.exports = __toCommonJS2(orangeA_exports);
    var orangeA2 = {
      orangeA1: "hsla(0, 0%, 0%, 0)",
      orangeA2: "hsla(13, 100%, 49.7%, 0.054)",
      orangeA3: "hsla(20, 100%, 49.7%, 0.117)",
      orangeA4: "hsla(23, 100%, 49.8%, 0.166)",
      orangeA5: "hsla(23, 99.4%, 50.1%, 0.215)",
      orangeA6: "hsla(23, 99.8%, 51.1%, 0.286)",
      orangeA7: "hsla(23, 99.7%, 50.6%, 0.389)",
      orangeA8: "hsla(24, 100%, 49.9%, 0.523)",
      orangeA9: "hsla(24, 99.9%, 51.6%, 0.965)",
      orangeA10: "hsla(25, 100%, 58.6%, 0.980)",
      orangeA11: "hsla(24, 100%, 62.4%, 0.980)",
      orangeA12: "hsla(26, 100%, 94.2%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/pinkA.js
var require_pinkA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/pinkA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pinkA_exports = {};
    __export2(pinkA_exports, {
      pinkA: () => pinkA2
    });
    module2.exports = __toCommonJS2(pinkA_exports);
    var pinkA2 = {
      pinkA1: "hsla(0, 0%, 0%, 0)",
      pinkA2: "hsla(320, 98.1%, 64.1%, 0.036)",
      pinkA3: "hsla(320, 99.1%, 63.1%, 0.121)",
      pinkA4: "hsla(320, 99.5%, 62.7%, 0.170)",
      pinkA5: "hsla(319, 99.7%, 61.5%, 0.219)",
      pinkA6: "hsla(322, 99.4%, 60.8%, 0.291)",
      pinkA7: "hsla(321, 99.6%, 58.7%, 0.407)",
      pinkA8: "hsla(322, 99.7%, 55.4%, 0.608)",
      pinkA9: "hsla(322, 100%, 64.6%, 0.817)",
      pinkA10: "hsla(323, 100%, 66.3%, 0.875)",
      pinkA11: "hsla(325, 99.9%, 68.6%, 0.960)",
      pinkA12: "hsla(314, 100%, 96.9%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/plumA.js
var require_plumA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/plumA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plumA_exports = {};
    __export2(plumA_exports, {
      plumA: () => plumA2
    });
    module2.exports = __toCommonJS2(plumA_exports);
    var plumA2 = {
      plumA1: "hsla(0, 0%, 0%, 0)",
      plumA2: "hsla(300, 96.4%, 58.4%, 0.036)",
      plumA3: "hsla(300, 99.4%, 67.1%, 0.102)",
      plumA4: "hsla(295, 99.8%, 66.3%, 0.155)",
      plumA5: "hsla(295, 99.4%, 67.1%, 0.204)",
      plumA6: "hsla(294, 99.0%, 67.8%, 0.262)",
      plumA7: "hsla(294, 99.9%, 67.7%, 0.363)",
      plumA8: "hsla(292, 99.8%, 67.5%, 0.527)",
      plumA9: "hsla(292, 99.9%, 69.2%, 0.695)",
      plumA10: "hsla(295, 99.9%, 70.8%, 0.748)",
      plumA11: "hsla(300, 99.8%, 72.9%, 0.828)",
      plumA12: "hsla(300, 100%, 97.1%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/purpleA.js
var require_purpleA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/purpleA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purpleA_exports = {};
    __export2(purpleA_exports, {
      purpleA: () => purpleA2
    });
    module2.exports = __toCommonJS2(purpleA_exports);
    var purpleA2 = {
      purpleA1: "hsla(0, 0%, 0%, 0)",
      purpleA2: "hsla(280, 96.5%, 57.5%, 0.045)",
      purpleA3: "hsla(279, 98.7%, 62.8%, 0.129)",
      purpleA4: "hsla(279, 99.1%, 64.0%, 0.191)",
      purpleA5: "hsla(278, 99.8%, 64.2%, 0.248)",
      purpleA6: "hsla(276, 99.6%, 64.6%, 0.328)",
      purpleA7: "hsla(274, 99.9%, 64.6%, 0.456)",
      purpleA8: "hsla(272, 99.7%, 64.6%, 0.660)",
      purpleA9: "hsla(272, 99.9%, 69.1%, 0.748)",
      purpleA10: "hsla(273, 100%, 71.3%, 0.801)",
      purpleA11: "hsla(275, 99.9%, 75.3%, 0.934)",
      purpleA12: "hsla(286, 100%, 97.1%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/mauveA.js
var require_mauveA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/mauveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauveA_exports = {};
    __export2(mauveA_exports, {
      mauveA: () => mauveA2
    });
    module2.exports = __toCommonJS2(mauveA_exports);
    var mauveA2 = {
      mauveA1: "hsla(0, 0%, 0%, 0)",
      mauveA2: "hsla(240, 76.7%, 91.2%, 0.031)",
      mauveA3: "hsla(240, 86.0%, 95.8%, 0.061)",
      mauveA4: "hsla(240, 91.8%, 94.7%, 0.087)",
      mauveA5: "hsla(240, 91.5%, 95.8%, 0.113)",
      mauveA6: "hsla(240, 92.0%, 93.8%, 0.148)",
      mauveA7: "hsla(240, 94.8%, 95.3%, 0.191)",
      mauveA8: "hsla(249, 98.1%, 95.2%, 0.273)",
      mauveA9: "hsla(248, 97.6%, 96.2%, 0.416)",
      mauveA10: "hsla(248, 95.5%, 96.6%, 0.477)",
      mauveA11: "hsla(250, 98.0%, 98.0%, 0.615)",
      mauveA12: "hsla(240, 93.9%, 99.6%, 0.931)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/redA.js
var require_redA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/redA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var redA_exports = {};
    __export2(redA_exports, {
      redA: () => redA2
    });
    module2.exports = __toCommonJS2(redA_exports);
    var redA2 = {
      redA1: "hsla(0, 0%, 0%, 0)",
      redA2: "hsla(5, 98.5%, 53.8%, 0.045)",
      redA3: "hsla(359, 99.1%, 61.1%, 0.130)",
      redA4: "hsla(358, 98.8%, 61.0%, 0.184)",
      redA5: "hsla(357, 99.6%, 60.3%, 0.237)",
      redA6: "hsla(358, 99.6%, 60.3%, 0.322)",
      redA7: "hsla(357, 100%, 59.5%, 0.442)",
      redA8: "hsla(358, 99.8%, 59.1%, 0.621)",
      redA9: "hsla(358, 100%, 65.5%, 0.884)",
      redA10: "hsla(358, 100%, 67.5%, 0.942)",
      redA11: "hsla(358, 100%, 69.7%, 0.980)",
      redA12: "hsla(352, 100%, 97.1%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/sageA.js
var require_sageA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/sageA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sageA_exports = {};
    __export2(sageA_exports, {
      sageA: () => sageA2
    });
    module2.exports = __toCommonJS2(sageA_exports);
    var sageA2 = {
      sageA1: "hsla(0, 0%, 0%, 0)",
      sageA2: "hsla(123, 94.4%, 91.4%, 0.026)",
      sageA3: "hsla(123, 82.9%, 91.0%, 0.057)",
      sageA4: "hsla(124, 97.9%, 94.5%, 0.082)",
      sageA5: "hsla(125, 90.0%, 95.2%, 0.104)",
      sageA6: "hsla(142, 95.1%, 94.8%, 0.134)",
      sageA7: "hsla(143, 92.8%, 95.7%, 0.173)",
      sageA8: "hsla(146, 94.7%, 95.3%, 0.255)",
      sageA9: "hsla(151, 98.2%, 94.4%, 0.397)",
      sageA10: "hsla(148, 99.5%, 95.5%, 0.457)",
      sageA11: "hsla(152, 95.1%, 97.3%, 0.600)",
      sageA12: "hsla(149, 93.3%, 99.6%, 0.927)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/sandA.js
var require_sandA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/sandA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sandA_exports = {};
    __export2(sandA_exports, {
      sandA: () => sandA2
    });
    module2.exports = __toCommonJS2(sandA_exports);
    var sandA2 = {
      sandA1: "hsla(0, 0%, 0%, 0)",
      sandA2: "hsla(60, 89.8%, 91.4%, 0.026)",
      sandA3: "hsla(60, 95.5%, 92.5%, 0.056)",
      sandA4: "hsla(60, 75.6%, 96.4%, 0.078)",
      sandA5: "hsla(60, 81.9%, 95.2%, 0.104)",
      sandA6: "hsla(41, 87.6%, 94.8%, 0.134)",
      sandA7: "hsla(60, 95.4%, 96.2%, 0.172)",
      sandA8: "hsla(49, 93.5%, 95.7%, 0.254)",
      sandA9: "hsla(52, 97.3%, 96.2%, 0.391)",
      sandA10: "hsla(52, 97.8%, 96.7%, 0.451)",
      sandA11: "hsla(51, 97.0%, 97.8%, 0.597)",
      sandA12: "hsla(60, 88.7%, 99.8%, 0.923)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/skyA.js
var require_skyA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/skyA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var skyA_exports = {};
    __export2(skyA_exports, {
      skyA: () => skyA2
    });
    module2.exports = __toCommonJS2(skyA_exports);
    var skyA2 = {
      skyA1: "hsla(0, 0%, 0%, 0)",
      skyA2: "hsla(208, 100%, 49.8%, 0.045)",
      skyA3: "hsla(201, 100%, 49.8%, 0.099)",
      skyA4: "hsla(201, 100%, 50.0%, 0.148)",
      skyA5: "hsla(200, 100%, 49.8%, 0.198)",
      skyA6: "hsla(199, 100%, 49.9%, 0.256)",
      skyA7: "hsla(199, 100%, 49.9%, 0.337)",
      skyA8: "hsla(199, 100%, 50.0%, 0.453)",
      skyA9: "hsla(192, 100%, 70.8%, 0.980)",
      skyA10: "hsla(190, 100%, 77.6%, 0.980)",
      skyA11: "hsla(192, 99.9%, 59.6%, 0.924)",
      skyA12: "hsla(189, 100%, 96.8%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/slateA.js
var require_slateA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/slateA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slateA_exports = {};
    __export2(slateA_exports, {
      slateA: () => slateA2
    });
    module2.exports = __toCommonJS2(slateA_exports);
    var slateA2 = {
      slateA1: "hsla(0, 0%, 0%, 0)",
      slateA2: "hsla(181, 98.9%, 91.8%, 0.026)",
      slateA3: "hsla(182, 86.7%, 91.4%, 0.057)",
      slateA4: "hsla(209, 86.7%, 93.9%, 0.083)",
      slateA5: "hsla(200, 90.3%, 93.4%, 0.109)",
      slateA6: "hsla(209, 95.3%, 93.5%, 0.139)",
      slateA7: "hsla(204, 98.5%, 93.9%, 0.182)",
      slateA8: "hsla(209, 94.0%, 94.7%, 0.265)",
      slateA9: "hsla(207, 97.3%, 94.0%, 0.412)",
      slateA10: "hsla(209, 99.4%, 95.2%, 0.472)",
      slateA11: "hsla(208, 98.7%, 96.8%, 0.615)",
      slateA12: "hsla(211, 86.7%, 99.6%, 0.927)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/tealA.js
var require_tealA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/tealA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tealA_exports = {};
    __export2(tealA_exports, {
      tealA: () => tealA2
    });
    module2.exports = __toCommonJS2(tealA_exports);
    var tealA2 = {
      tealA1: "hsla(0, 0%, 0%, 0)",
      tealA2: "hsla(171, 100%, 49.2%, 0.031)",
      tealA3: "hsla(172, 100%, 49.7%, 0.070)",
      tealA4: "hsla(175, 100%, 49.7%, 0.105)",
      tealA5: "hsla(174, 98.9%, 50.1%, 0.140)",
      tealA6: "hsla(174, 100%, 51.8%, 0.187)",
      tealA7: "hsla(173, 99.6%, 53.2%, 0.257)",
      tealA8: "hsla(174, 99.6%, 53.3%, 0.366)",
      tealA9: "hsla(173, 99.9%, 54.6%, 0.609)",
      tealA10: "hsla(174, 99.9%, 53.8%, 0.670)",
      tealA11: "hsla(174, 100%, 52.0%, 0.748)",
      tealA12: "hsla(166, 98.6%, 95.0%, 0.979)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/tomatoA.js
var require_tomatoA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/tomatoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomatoA_exports = {};
    __export2(tomatoA_exports, {
      tomatoA: () => tomatoA2
    });
    module2.exports = __toCommonJS2(tomatoA_exports);
    var tomatoA2 = {
      tomatoA1: "hsla(0, 0%, 0%, 0)",
      tomatoA2: "hsla(5, 100%, 49.6%, 0.058)",
      tomatoA3: "hsla(6, 99.6%, 54.9%, 0.133)",
      tomatoA4: "hsla(6, 99.2%, 55.4%, 0.191)",
      tomatoA5: "hsla(6, 99.5%, 55.8%, 0.244)",
      tomatoA6: "hsla(7, 99.7%, 55.9%, 0.319)",
      tomatoA7: "hsla(8, 99.8%, 54.8%, 0.434)",
      tomatoA8: "hsla(10, 99.8%, 53.5%, 0.598)",
      tomatoA9: "hsla(10, 100%, 59.7%, 0.885)",
      tomatoA10: "hsla(10, 100%, 63.6%, 0.916)",
      tomatoA11: "hsla(10, 99.7%, 66.4%, 0.939)",
      tomatoA12: "hsla(12, 100%, 97.1%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/violetA.js
var require_violetA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/violetA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violetA_exports = {};
    __export2(violetA_exports, {
      violetA: () => violetA2
    });
    module2.exports = __toCommonJS2(violetA_exports);
    var violetA2 = {
      violetA1: "hsla(0, 0%, 0%, 0)",
      violetA2: "hsla(258, 98.2%, 61.0%, 0.054)",
      violetA3: "hsla(252, 98.8%, 65.8%, 0.148)",
      violetA4: "hsla(253, 99.7%, 65.7%, 0.219)",
      violetA5: "hsla(252, 99.7%, 66.4%, 0.286)",
      violetA6: "hsla(251, 99.7%, 66.2%, 0.371)",
      violetA7: "hsla(250, 99.7%, 66.3%, 0.514)",
      violetA8: "hsla(250, 99.7%, 66.1%, 0.733)",
      violetA9: "hsla(252, 99.9%, 70.3%, 0.786)",
      violetA10: "hsla(251, 99.9%, 72.9%, 0.844)",
      violetA11: "hsla(250, 100%, 77.9%, 0.980)",
      violetA12: "hsla(254, 100%, 97.5%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/dark/yellowA.js
var require_yellowA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/dark/yellowA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellowA_exports = {};
    __export2(yellowA_exports, {
      yellowA: () => yellowA2
    });
    module2.exports = __toCommonJS2(yellowA_exports);
    var yellowA2 = {
      yellowA1: "hsla(0, 0%, 0%, 0)",
      yellowA2: "hsla(49, 100%, 49.1%, 0.027)",
      yellowA3: "hsla(45, 100%, 49.7%, 0.071)",
      yellowA4: "hsla(46, 100%, 49.7%, 0.111)",
      yellowA5: "hsla(47, 100%, 49.9%, 0.150)",
      yellowA6: "hsla(51, 100%, 49.8%, 0.199)",
      yellowA7: "hsla(51, 99.8%, 53.6%, 0.269)",
      yellowA8: "hsla(51, 100%, 49.9%, 0.371)",
      yellowA9: "hsla(53, 100%, 52.0%, 0.956)",
      yellowA10: "hsla(56, 100%, 68.4%, 0.980)",
      yellowA11: "hsla(48, 100%, 50.0%, 0.934)",
      yellowA12: "hsla(60, 100%, 91.8%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/amber.js
var require_amber2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/amber.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amber_exports = {};
    __export2(amber_exports, {
      amber: () => amber2
    });
    module2.exports = __toCommonJS2(amber_exports);
    var amber2 = {
      amber1: "hsl(39, 70.0%, 99.0%)",
      amber2: "hsl(40, 100%, 96.5%)",
      amber3: "hsl(44, 100%, 91.7%)",
      amber4: "hsl(43, 100%, 86.8%)",
      amber5: "hsl(42, 100%, 81.8%)",
      amber6: "hsl(38, 99.7%, 76.3%)",
      amber7: "hsl(36, 86.1%, 67.1%)",
      amber8: "hsl(35, 85.2%, 55.1%)",
      amber9: "hsl(39, 100%, 57.0%)",
      amber10: "hsl(35, 100%, 55.5%)",
      amber11: "hsl(30, 100%, 34.0%)",
      amber12: "hsl(20, 80.0%, 17.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/blue.js
var require_blue2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/blue.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blue_exports = {};
    __export2(blue_exports, {
      blue: () => blue3
    });
    module2.exports = __toCommonJS2(blue_exports);
    var blue3 = {
      blue1: "hsl(206, 100%, 99.2%)",
      blue2: "hsl(210, 100%, 98.0%)",
      blue3: "hsl(209, 100%, 96.5%)",
      blue4: "hsl(210, 98.8%, 94.0%)",
      blue5: "hsl(209, 95.0%, 90.1%)",
      blue6: "hsl(209, 81.2%, 84.5%)",
      blue7: "hsl(208, 77.5%, 76.9%)",
      blue8: "hsl(206, 81.9%, 65.3%)",
      blue9: "hsl(206, 100%, 50.0%)",
      blue10: "hsl(208, 100%, 47.3%)",
      blue11: "hsl(211, 100%, 43.2%)",
      blue12: "hsl(211, 100%, 15.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/bronze.js
var require_bronze2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/bronze.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronze_exports = {};
    __export2(bronze_exports, {
      bronze: () => bronze2
    });
    module2.exports = __toCommonJS2(bronze_exports);
    var bronze2 = {
      bronze1: "hsl(15, 30.0%, 99.1%)",
      bronze2: "hsl(17, 63.6%, 97.8%)",
      bronze3: "hsl(17, 42.1%, 95.2%)",
      bronze4: "hsl(17, 35.2%, 92.1%)",
      bronze5: "hsl(17, 31.5%, 88.2%)",
      bronze6: "hsl(17, 29.0%, 83.0%)",
      bronze7: "hsl(17, 26.9%, 75.6%)",
      bronze8: "hsl(17, 25.1%, 66.5%)",
      bronze9: "hsl(17, 20.0%, 54.0%)",
      bronze10: "hsl(17, 18.1%, 50.1%)",
      bronze11: "hsl(15, 20.0%, 43.1%)",
      bronze12: "hsl(12, 22.0%, 21.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/brown.js
var require_brown2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/brown.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brown_exports = {};
    __export2(brown_exports, {
      brown: () => brown2
    });
    module2.exports = __toCommonJS2(brown_exports);
    var brown2 = {
      brown1: "hsl(30, 40.0%, 99.1%)",
      brown2: "hsl(30, 50.0%, 97.6%)",
      brown3: "hsl(30, 52.5%, 94.6%)",
      brown4: "hsl(30, 53.0%, 91.2%)",
      brown5: "hsl(29, 52.9%, 86.8%)",
      brown6: "hsl(29, 52.5%, 80.9%)",
      brown7: "hsl(29, 51.5%, 72.8%)",
      brown8: "hsl(28, 50.0%, 63.1%)",
      brown9: "hsl(28, 34.0%, 51.0%)",
      brown10: "hsl(27, 31.8%, 47.6%)",
      brown11: "hsl(25, 30.0%, 41.0%)",
      brown12: "hsl(20, 30.0%, 19.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/crimson.js
var require_crimson2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/crimson.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimson_exports = {};
    __export2(crimson_exports, {
      crimson: () => crimson2
    });
    module2.exports = __toCommonJS2(crimson_exports);
    var crimson2 = {
      crimson1: "hsl(332, 100%, 99.4%)",
      crimson2: "hsl(330, 100%, 98.4%)",
      crimson3: "hsl(331, 85.6%, 96.6%)",
      crimson4: "hsl(331, 78.1%, 94.2%)",
      crimson5: "hsl(332, 72.1%, 91.1%)",
      crimson6: "hsl(333, 67.0%, 86.7%)",
      crimson7: "hsl(335, 63.5%, 80.4%)",
      crimson8: "hsl(336, 62.3%, 72.9%)",
      crimson9: "hsl(336, 80.0%, 57.8%)",
      crimson10: "hsl(336, 73.7%, 53.5%)",
      crimson11: "hsl(336, 75.0%, 47.2%)",
      crimson12: "hsl(340, 65.0%, 14.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/cyan.js
var require_cyan2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/cyan.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyan_exports = {};
    __export2(cyan_exports, {
      cyan: () => cyan2
    });
    module2.exports = __toCommonJS2(cyan_exports);
    var cyan2 = {
      cyan1: "hsl(185, 60.0%, 98.7%)",
      cyan2: "hsl(185, 73.3%, 97.1%)",
      cyan3: "hsl(186, 70.2%, 94.4%)",
      cyan4: "hsl(186, 63.8%, 90.6%)",
      cyan5: "hsl(187, 58.3%, 85.4%)",
      cyan6: "hsl(188, 54.6%, 78.4%)",
      cyan7: "hsl(189, 53.7%, 68.7%)",
      cyan8: "hsl(189, 60.3%, 52.5%)",
      cyan9: "hsl(190, 95.0%, 39.0%)",
      cyan10: "hsl(191, 91.2%, 36.8%)",
      cyan11: "hsl(192, 85.0%, 31.0%)",
      cyan12: "hsl(192, 88.0%, 12.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/gold.js
var require_gold2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/gold.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gold_exports = {};
    __export2(gold_exports, {
      gold: () => gold2
    });
    module2.exports = __toCommonJS2(gold_exports);
    var gold2 = {
      gold1: "hsl(50, 20.0%, 99.1%)",
      gold2: "hsl(47, 52.9%, 96.7%)",
      gold3: "hsl(46, 38.2%, 93.7%)",
      gold4: "hsl(44, 32.7%, 90.1%)",
      gold5: "hsl(43, 29.9%, 85.7%)",
      gold6: "hsl(41, 28.3%, 79.8%)",
      gold7: "hsl(39, 27.6%, 71.9%)",
      gold8: "hsl(36, 27.2%, 61.8%)",
      gold9: "hsl(36, 20.0%, 49.5%)",
      gold10: "hsl(36, 19.8%, 45.7%)",
      gold11: "hsl(36, 20.0%, 39.0%)",
      gold12: "hsl(36, 16.0%, 20.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/grass.js
var require_grass2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/grass.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grass_exports = {};
    __export2(grass_exports, {
      grass: () => grass2
    });
    module2.exports = __toCommonJS2(grass_exports);
    var grass2 = {
      grass1: "hsl(116, 50.0%, 98.9%)",
      grass2: "hsl(120, 60.0%, 97.1%)",
      grass3: "hsl(120, 53.6%, 94.8%)",
      grass4: "hsl(121, 47.5%, 91.4%)",
      grass5: "hsl(122, 42.6%, 86.5%)",
      grass6: "hsl(124, 39.0%, 79.7%)",
      grass7: "hsl(126, 37.1%, 70.2%)",
      grass8: "hsl(131, 38.1%, 56.3%)",
      grass9: "hsl(131, 41.0%, 46.5%)",
      grass10: "hsl(132, 43.1%, 42.2%)",
      grass11: "hsl(133, 50.0%, 32.5%)",
      grass12: "hsl(130, 30.0%, 14.9%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/gray.js
var require_gray2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/gray.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gray_exports = {};
    __export2(gray_exports, {
      gray: () => gray3
    });
    module2.exports = __toCommonJS2(gray_exports);
    var gray3 = {
      gray1: "hsl(0, 0%, 99.0%)",
      gray2: "hsl(0, 0%, 97.3%)",
      gray3: "hsl(0, 0%, 95.1%)",
      gray4: "hsl(0, 0%, 93.0%)",
      gray5: "hsl(0, 0%, 90.9%)",
      gray6: "hsl(0, 0%, 88.7%)",
      gray7: "hsl(0, 0%, 85.8%)",
      gray8: "hsl(0, 0%, 78.0%)",
      gray9: "hsl(0, 0%, 56.1%)",
      gray10: "hsl(0, 0%, 52.3%)",
      gray11: "hsl(0, 0%, 43.5%)",
      gray12: "hsl(0, 0%, 9.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/green.js
var require_green2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/green.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var green_exports = {};
    __export2(green_exports, {
      green: () => green3
    });
    module2.exports = __toCommonJS2(green_exports);
    var green3 = {
      green1: "hsl(136, 50.0%, 98.9%)",
      green2: "hsl(138, 62.5%, 96.9%)",
      green3: "hsl(139, 55.2%, 94.5%)",
      green4: "hsl(140, 48.7%, 91.0%)",
      green5: "hsl(141, 43.7%, 86.0%)",
      green6: "hsl(143, 40.3%, 79.0%)",
      green7: "hsl(146, 38.5%, 69.0%)",
      green8: "hsl(151, 40.2%, 54.1%)",
      green9: "hsl(151, 55.0%, 41.5%)",
      green10: "hsl(152, 57.5%, 37.6%)",
      green11: "hsl(153, 67.0%, 28.5%)",
      green12: "hsl(155, 40.0%, 14.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/indigo.js
var require_indigo2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/indigo.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigo_exports = {};
    __export2(indigo_exports, {
      indigo: () => indigo2
    });
    module2.exports = __toCommonJS2(indigo_exports);
    var indigo2 = {
      indigo1: "hsl(225, 60.0%, 99.4%)",
      indigo2: "hsl(223, 100%, 98.6%)",
      indigo3: "hsl(223, 98.4%, 97.1%)",
      indigo4: "hsl(223, 92.9%, 95.0%)",
      indigo5: "hsl(224, 87.1%, 92.0%)",
      indigo6: "hsl(224, 81.9%, 87.8%)",
      indigo7: "hsl(225, 77.4%, 82.1%)",
      indigo8: "hsl(226, 75.4%, 74.5%)",
      indigo9: "hsl(226, 70.0%, 55.5%)",
      indigo10: "hsl(226, 58.6%, 51.3%)",
      indigo11: "hsl(226, 55.0%, 45.0%)",
      indigo12: "hsl(226, 62.0%, 17.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/lime.js
var require_lime2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/lime.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var lime_exports = {};
    __export2(lime_exports, {
      lime: () => lime2
    });
    module2.exports = __toCommonJS2(lime_exports);
    var lime2 = {
      lime1: "hsl(85, 50.0%, 98.7%)",
      lime2: "hsl(85, 66.7%, 96.5%)",
      lime3: "hsl(85, 76.0%, 92.3%)",
      lime4: "hsl(84, 75.3%, 87.5%)",
      lime5: "hsl(84, 71.5%, 81.9%)",
      lime6: "hsl(82, 65.0%, 74.6%)",
      lime7: "hsl(79, 53.2%, 61.8%)",
      lime8: "hsl(76, 61.7%, 45.1%)",
      lime9: "hsl(81, 67.0%, 50.0%)",
      lime10: "hsl(80, 68.3%, 46.9%)",
      lime11: "hsl(75, 80.0%, 26.0%)",
      lime12: "hsl(78, 70.0%, 11.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/mint.js
var require_mint2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/mint.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mint_exports = {};
    __export2(mint_exports, {
      mint: () => mint2
    });
    module2.exports = __toCommonJS2(mint_exports);
    var mint2 = {
      mint1: "hsl(165, 80.0%, 98.8%)",
      mint2: "hsl(164, 88.2%, 96.7%)",
      mint3: "hsl(164, 76.6%, 93.3%)",
      mint4: "hsl(165, 68.8%, 89.5%)",
      mint5: "hsl(165, 60.6%, 84.5%)",
      mint6: "hsl(165, 53.5%, 76.9%)",
      mint7: "hsl(166, 50.7%, 66.1%)",
      mint8: "hsl(168, 52.8%, 51.0%)",
      mint9: "hsl(167, 65.0%, 66.0%)",
      mint10: "hsl(167, 59.3%, 63.1%)",
      mint11: "hsl(172, 72.0%, 28.5%)",
      mint12: "hsl(172, 70.0%, 12.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/olive.js
var require_olive2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/olive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var olive_exports = {};
    __export2(olive_exports, {
      olive: () => olive2
    });
    module2.exports = __toCommonJS2(olive_exports);
    var olive2 = {
      olive1: "hsl(110, 20.0%, 99.0%)",
      olive2: "hsl(120, 16.7%, 97.6%)",
      olive3: "hsl(119, 10.1%, 95.2%)",
      olive4: "hsl(118, 8.1%, 93.0%)",
      olive5: "hsl(117, 7.1%, 90.8%)",
      olive6: "hsl(115, 6.4%, 88.5%)",
      olive7: "hsl(114, 5.9%, 85.4%)",
      olive8: "hsl(110, 5.2%, 77.3%)",
      olive9: "hsl(110, 3.5%, 55.5%)",
      olive10: "hsl(111, 2.8%, 51.7%)",
      olive11: "hsl(110, 3.0%, 43.0%)",
      olive12: "hsl(110, 25.0%, 9.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/orange.js
var require_orange2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/orange.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orange_exports = {};
    __export2(orange_exports, {
      orange: () => orange3
    });
    module2.exports = __toCommonJS2(orange_exports);
    var orange3 = {
      orange1: "hsl(24, 70.0%, 99.0%)",
      orange2: "hsl(24, 83.3%, 97.6%)",
      orange3: "hsl(24, 100%, 95.3%)",
      orange4: "hsl(25, 100%, 92.2%)",
      orange5: "hsl(25, 100%, 88.2%)",
      orange6: "hsl(25, 100%, 82.8%)",
      orange7: "hsl(24, 100%, 75.3%)",
      orange8: "hsl(24, 94.5%, 64.3%)",
      orange9: "hsl(24, 94.0%, 50.0%)",
      orange10: "hsl(24, 100%, 46.5%)",
      orange11: "hsl(24, 100%, 37.0%)",
      orange12: "hsl(15, 60.0%, 17.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/pink.js
var require_pink2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/pink.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pink_exports = {};
    __export2(pink_exports, {
      pink: () => pink3
    });
    module2.exports = __toCommonJS2(pink_exports);
    var pink3 = {
      pink1: "hsl(322, 100%, 99.4%)",
      pink2: "hsl(323, 100%, 98.4%)",
      pink3: "hsl(323, 86.3%, 96.5%)",
      pink4: "hsl(323, 78.7%, 94.2%)",
      pink5: "hsl(323, 72.2%, 91.1%)",
      pink6: "hsl(323, 66.3%, 86.6%)",
      pink7: "hsl(323, 62.0%, 80.1%)",
      pink8: "hsl(323, 60.3%, 72.4%)",
      pink9: "hsl(322, 65.0%, 54.5%)",
      pink10: "hsl(322, 63.9%, 50.7%)",
      pink11: "hsl(322, 75.0%, 46.0%)",
      pink12: "hsl(320, 70.0%, 13.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/plum.js
var require_plum2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/plum.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plum_exports = {};
    __export2(plum_exports, {
      plum: () => plum2
    });
    module2.exports = __toCommonJS2(plum_exports);
    var plum2 = {
      plum1: "hsl(292, 90.0%, 99.4%)",
      plum2: "hsl(300, 100%, 98.6%)",
      plum3: "hsl(299, 71.2%, 96.4%)",
      plum4: "hsl(299, 62.0%, 93.8%)",
      plum5: "hsl(298, 56.1%, 90.5%)",
      plum6: "hsl(296, 51.3%, 85.8%)",
      plum7: "hsl(295, 48.2%, 78.9%)",
      plum8: "hsl(292, 47.7%, 70.8%)",
      plum9: "hsl(292, 45.0%, 51.0%)",
      plum10: "hsl(292, 50.2%, 46.9%)",
      plum11: "hsl(292, 60.0%, 42.5%)",
      plum12: "hsl(291, 66.0%, 14.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/purple.js
var require_purple2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/purple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purple_exports = {};
    __export2(purple_exports, {
      purple: () => purple3
    });
    module2.exports = __toCommonJS2(purple_exports);
    var purple3 = {
      purple1: "hsl(280, 65.0%, 99.4%)",
      purple2: "hsl(276, 100%, 99.0%)",
      purple3: "hsl(276, 83.1%, 97.0%)",
      purple4: "hsl(275, 76.4%, 94.7%)",
      purple5: "hsl(275, 70.8%, 91.8%)",
      purple6: "hsl(274, 65.4%, 87.8%)",
      purple7: "hsl(273, 61.0%, 81.7%)",
      purple8: "hsl(272, 60.0%, 73.5%)",
      purple9: "hsl(272, 51.0%, 54.0%)",
      purple10: "hsl(272, 46.8%, 50.3%)",
      purple11: "hsl(272, 50.0%, 45.8%)",
      purple12: "hsl(272, 66.0%, 16.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/mauve.js
var require_mauve2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/mauve.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauve_exports = {};
    __export2(mauve_exports, {
      mauve: () => mauve2
    });
    module2.exports = __toCommonJS2(mauve_exports);
    var mauve2 = {
      mauve1: "hsl(300, 20.0%, 99.0%)",
      mauve2: "hsl(300, 7.7%, 97.5%)",
      mauve3: "hsl(294, 5.5%, 95.3%)",
      mauve4: "hsl(289, 4.7%, 93.3%)",
      mauve5: "hsl(283, 4.4%, 91.3%)",
      mauve6: "hsl(278, 4.1%, 89.1%)",
      mauve7: "hsl(271, 3.9%, 86.3%)",
      mauve8: "hsl(255, 3.7%, 78.8%)",
      mauve9: "hsl(252, 4.0%, 57.3%)",
      mauve10: "hsl(253, 3.5%, 53.5%)",
      mauve11: "hsl(252, 4.0%, 44.8%)",
      mauve12: "hsl(260, 25.0%, 11.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/red.js
var require_red2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/red.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var red_exports = {};
    __export2(red_exports, {
      red: () => red3
    });
    module2.exports = __toCommonJS2(red_exports);
    var red3 = {
      red1: "hsl(359, 100%, 99.4%)",
      red2: "hsl(359, 100%, 98.6%)",
      red3: "hsl(360, 100%, 96.8%)",
      red4: "hsl(360, 97.9%, 94.8%)",
      red5: "hsl(360, 90.2%, 91.9%)",
      red6: "hsl(360, 81.7%, 87.8%)",
      red7: "hsl(359, 74.2%, 81.7%)",
      red8: "hsl(359, 69.5%, 74.3%)",
      red9: "hsl(358, 75.0%, 59.0%)",
      red10: "hsl(358, 69.4%, 55.2%)",
      red11: "hsl(358, 65.0%, 48.7%)",
      red12: "hsl(354, 50.0%, 14.6%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/sage.js
var require_sage2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/sage.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sage_exports = {};
    __export2(sage_exports, {
      sage: () => sage2
    });
    module2.exports = __toCommonJS2(sage_exports);
    var sage2 = {
      sage1: "hsl(155, 30.0%, 98.8%)",
      sage2: "hsl(150, 16.7%, 97.6%)",
      sage3: "hsl(151, 10.6%, 95.2%)",
      sage4: "hsl(151, 8.8%, 93.0%)",
      sage5: "hsl(151, 7.8%, 90.8%)",
      sage6: "hsl(152, 7.2%, 88.4%)",
      sage7: "hsl(153, 6.7%, 85.3%)",
      sage8: "hsl(154, 6.1%, 77.5%)",
      sage9: "hsl(155, 3.5%, 55.5%)",
      sage10: "hsl(154, 2.8%, 51.7%)",
      sage11: "hsl(155, 3.0%, 43.0%)",
      sage12: "hsl(155, 24.0%, 9.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/sand.js
var require_sand2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/sand.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sand_exports = {};
    __export2(sand_exports, {
      sand: () => sand2
    });
    module2.exports = __toCommonJS2(sand_exports);
    var sand2 = {
      sand1: "hsl(50, 20.0%, 99.0%)",
      sand2: "hsl(60, 7.7%, 97.5%)",
      sand3: "hsl(59, 6.5%, 95.1%)",
      sand4: "hsl(58, 6.1%, 92.9%)",
      sand5: "hsl(57, 6.0%, 90.7%)",
      sand6: "hsl(56, 5.9%, 88.4%)",
      sand7: "hsl(55, 5.9%, 85.2%)",
      sand8: "hsl(51, 6.0%, 77.1%)",
      sand9: "hsl(50, 2.0%, 55.7%)",
      sand10: "hsl(55, 1.7%, 51.9%)",
      sand11: "hsl(50, 2.0%, 43.1%)",
      sand12: "hsl(50, 6.0%, 10.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/sky.js
var require_sky2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/sky.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sky_exports = {};
    __export2(sky_exports, {
      sky: () => sky2
    });
    module2.exports = __toCommonJS2(sky_exports);
    var sky2 = {
      sky1: "hsl(193, 100%, 98.8%)",
      sky2: "hsl(193, 100%, 97.3%)",
      sky3: "hsl(193, 99.0%, 94.7%)",
      sky4: "hsl(193, 91.4%, 91.4%)",
      sky5: "hsl(194, 82.0%, 86.6%)",
      sky6: "hsl(194, 74.1%, 79.5%)",
      sky7: "hsl(194, 72.3%, 69.6%)",
      sky8: "hsl(193, 77.9%, 53.9%)",
      sky9: "hsl(193, 98.0%, 70.0%)",
      sky10: "hsl(193, 87.0%, 66.5%)",
      sky11: "hsl(195, 100%, 31.5%)",
      sky12: "hsl(195, 100%, 13.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/slate.js
var require_slate2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/slate.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slate_exports = {};
    __export2(slate_exports, {
      slate: () => slate2
    });
    module2.exports = __toCommonJS2(slate_exports);
    var slate2 = {
      slate1: "hsl(206, 30.0%, 98.8%)",
      slate2: "hsl(210, 16.7%, 97.6%)",
      slate3: "hsl(209, 13.3%, 95.3%)",
      slate4: "hsl(209, 12.2%, 93.2%)",
      slate5: "hsl(208, 11.7%, 91.1%)",
      slate6: "hsl(208, 11.3%, 88.9%)",
      slate7: "hsl(207, 11.1%, 85.9%)",
      slate8: "hsl(205, 10.7%, 78.0%)",
      slate9: "hsl(206, 6.0%, 56.1%)",
      slate10: "hsl(206, 5.8%, 52.3%)",
      slate11: "hsl(206, 6.0%, 43.5%)",
      slate12: "hsl(206, 24.0%, 9.0%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/teal.js
var require_teal2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/teal.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var teal_exports = {};
    __export2(teal_exports, {
      teal: () => teal2
    });
    module2.exports = __toCommonJS2(teal_exports);
    var teal2 = {
      teal1: "hsl(165, 60.0%, 98.8%)",
      teal2: "hsl(169, 64.7%, 96.7%)",
      teal3: "hsl(169, 59.8%, 94.0%)",
      teal4: "hsl(169, 53.1%, 90.2%)",
      teal5: "hsl(170, 47.1%, 85.0%)",
      teal6: "hsl(170, 42.6%, 77.9%)",
      teal7: "hsl(170, 39.9%, 68.1%)",
      teal8: "hsl(172, 42.1%, 52.5%)",
      teal9: "hsl(173, 80.0%, 36.0%)",
      teal10: "hsl(173, 83.4%, 32.5%)",
      teal11: "hsl(174, 90.0%, 25.2%)",
      teal12: "hsl(170, 50.0%, 12.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/tomato.js
var require_tomato2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/tomato.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomato_exports = {};
    __export2(tomato_exports, {
      tomato: () => tomato2
    });
    module2.exports = __toCommonJS2(tomato_exports);
    var tomato2 = {
      tomato1: "hsl(10, 100%, 99.4%)",
      tomato2: "hsl(8, 100%, 98.4%)",
      tomato3: "hsl(8, 100%, 96.6%)",
      tomato4: "hsl(8, 100%, 94.3%)",
      tomato5: "hsl(8, 92.8%, 91.0%)",
      tomato6: "hsl(9, 84.7%, 86.3%)",
      tomato7: "hsl(10, 77.3%, 79.5%)",
      tomato8: "hsl(10, 71.6%, 71.0%)",
      tomato9: "hsl(10, 78.0%, 54.0%)",
      tomato10: "hsl(10, 71.5%, 50.0%)",
      tomato11: "hsl(10, 82.0%, 43.5%)",
      tomato12: "hsl(10, 50.0%, 13.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/violet.js
var require_violet2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/violet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violet_exports = {};
    __export2(violet_exports, {
      violet: () => violet2
    });
    module2.exports = __toCommonJS2(violet_exports);
    var violet2 = {
      violet1: "hsl(255, 65.0%, 99.4%)",
      violet2: "hsl(252, 100%, 99.0%)",
      violet3: "hsl(252, 96.9%, 97.4%)",
      violet4: "hsl(252, 91.5%, 95.5%)",
      violet5: "hsl(252, 85.1%, 93.0%)",
      violet6: "hsl(252, 77.8%, 89.4%)",
      violet7: "hsl(252, 71.0%, 83.7%)",
      violet8: "hsl(252, 68.6%, 76.3%)",
      violet9: "hsl(252, 56.0%, 57.5%)",
      violet10: "hsl(251, 48.1%, 53.5%)",
      violet11: "hsl(250, 43.0%, 48.0%)",
      violet12: "hsl(254, 60.0%, 18.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/yellow.js
var require_yellow2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/yellow.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellow_exports = {};
    __export2(yellow_exports, {
      yellow: () => yellow3
    });
    module2.exports = __toCommonJS2(yellow_exports);
    var yellow3 = {
      yellow1: "hsl(60, 54.0%, 98.5%)",
      yellow2: "hsl(52, 100%, 95.5%)",
      yellow3: "hsl(55, 100%, 90.9%)",
      yellow4: "hsl(54, 100%, 86.6%)",
      yellow5: "hsl(52, 97.9%, 82.0%)",
      yellow6: "hsl(50, 89.4%, 76.1%)",
      yellow7: "hsl(47, 80.4%, 68.0%)",
      yellow8: "hsl(48, 100%, 46.1%)",
      yellow9: "hsl(53, 92.0%, 50.0%)",
      yellow10: "hsl(50, 100%, 48.5%)",
      yellow11: "hsl(42, 100%, 29.0%)",
      yellow12: "hsl(40, 55.0%, 13.5%)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/amberA.js
var require_amberA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/amberA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amberA_exports = {};
    __export2(amberA_exports, {
      amberA: () => amberA2
    });
    module2.exports = __toCommonJS2(amberA_exports);
    var amberA2 = {
      amberA1: "hsla(40, 94.9%, 38.7%, 0.016)",
      amberA2: "hsla(40, 100%, 50.3%, 0.071)",
      amberA3: "hsla(44, 100%, 50.1%, 0.165)",
      amberA4: "hsla(43, 100%, 50.0%, 0.263)",
      amberA5: "hsla(42, 100%, 50.0%, 0.365)",
      amberA6: "hsla(38, 100%, 50.1%, 0.475)",
      amberA7: "hsla(36, 99.9%, 46.2%, 0.612)",
      amberA8: "hsla(35, 99.8%, 46.0%, 0.832)",
      amberA9: "hsla(39, 100%, 50.0%, 0.859)",
      amberA10: "hsla(35, 100%, 50.0%, 0.891)",
      amberA11: "hsla(29, 100%, 33.6%, 0.980)",
      amberA12: "hsla(20, 99.8%, 14.1%, 0.965)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/blueA.js
var require_blueA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/blueA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blueA_exports = {};
    __export2(blueA_exports, {
      blueA: () => blueA2
    });
    module2.exports = __toCommonJS2(blueA_exports);
    var blueA2 = {
      blueA1: "hsla(210, 100%, 51.0%, 0.016)",
      blueA2: "hsla(210, 100%, 51.0%, 0.040)",
      blueA3: "hsla(210, 100%, 50.3%, 0.071)",
      blueA4: "hsla(210, 100%, 50.1%, 0.118)",
      blueA5: "hsla(208, 99.1%, 47.1%, 0.189)",
      blueA6: "hsla(209, 99.5%, 45.3%, 0.283)",
      blueA7: "hsla(208, 99.9%, 43.8%, 0.412)",
      blueA8: "hsla(206, 99.8%, 45.1%, 0.632)",
      blueA9: "hsla(206, 100%, 50.0%, 0.980)",
      blueA10: "hsla(208, 100%, 47.2%, 0.980)",
      blueA11: "hsla(212, 100%, 43.0%, 0.980)",
      blueA12: "hsla(213, 100%, 14.4%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/bronzeA.js
var require_bronzeA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/bronzeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronzeA_exports = {};
    __export2(bronzeA_exports, {
      bronzeA: () => bronzeA2
    });
    module2.exports = __toCommonJS2(bronzeA_exports);
    var bronzeA2 = {
      bronzeA1: "hsla(0, 89.3%, 18.3%, 0.012)",
      bronzeA2: "hsla(17, 95.1%, 40.1%, 0.036)",
      bronzeA3: "hsla(18, 98.3%, 29.8%, 0.067)",
      bronzeA4: "hsla(17, 99.6%, 26.0%, 0.106)",
      bronzeA5: "hsla(19, 99.6%, 23.8%, 0.157)",
      bronzeA6: "hsla(17, 99.2%, 22.5%, 0.220)",
      bronzeA7: "hsla(18, 99.7%, 21.6%, 0.310)",
      bronzeA8: "hsla(17, 99.5%, 20.2%, 0.420)",
      bronzeA9: "hsla(18, 99.9%, 16.7%, 0.553)",
      bronzeA10: "hsla(17, 99.2%, 15.4%, 0.589)",
      bronzeA11: "hsla(15, 99.9%, 13.2%, 0.655)",
      bronzeA12: "hsla(12, 98.7%, 5.7%, 0.832)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/brownA.js
var require_brownA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/brownA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brownA_exports = {};
    __export2(brownA_exports, {
      brownA: () => brownA2
    });
    module2.exports = __toCommonJS2(brownA_exports);
    var brownA2 = {
      brownA1: "hsla(30, 94.3%, 34.6%, 0.012)",
      brownA2: "hsla(30, 94.3%, 34.6%, 0.036)",
      brownA3: "hsla(30, 97.7%, 33.9%, 0.083)",
      brownA4: "hsla(31, 98.5%, 34.2%, 0.134)",
      brownA5: "hsla(29, 100%, 34.3%, 0.200)",
      brownA6: "hsla(28, 99.2%, 34.6%, 0.291)",
      brownA7: "hsla(29, 99.8%, 33.8%, 0.412)",
      brownA8: "hsla(28, 100%, 33.3%, 0.553)",
      brownA9: "hsla(28, 99.9%, 25.5%, 0.655)",
      brownA10: "hsla(27, 99.7%, 22.4%, 0.675)",
      brownA11: "hsla(25, 99.8%, 17.3%, 0.714)",
      brownA12: "hsla(21, 99.4%, 6.6%, 0.867)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/crimsonA.js
var require_crimsonA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/crimsonA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimsonA_exports = {};
    __export2(crimsonA_exports, {
      crimsonA: () => crimsonA2
    });
    module2.exports = __toCommonJS2(crimsonA_exports);
    var crimsonA2 = {
      crimsonA1: "hsla(340, 100%, 51.0%, 0.012)",
      crimsonA2: "hsla(330, 100%, 51.0%, 0.032)",
      crimsonA3: "hsla(332, 99.1%, 47.1%, 0.063)",
      crimsonA4: "hsla(331, 99.9%, 44.3%, 0.102)",
      crimsonA5: "hsla(333, 99.9%, 42.3%, 0.153)",
      crimsonA6: "hsla(333, 99.5%, 40.5%, 0.224)",
      crimsonA7: "hsla(335, 99.7%, 39.1%, 0.322)",
      crimsonA8: "hsla(336, 99.5%, 38.5%, 0.440)",
      crimsonA9: "hsla(336, 99.9%, 44.3%, 0.761)",
      crimsonA10: "hsla(336, 100%, 42.5%, 0.808)",
      crimsonA11: "hsla(336, 99.8%, 40.3%, 0.883)",
      crimsonA12: "hsla(340, 99.0%, 10.0%, 0.950)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/cyanA.js
var require_cyanA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/cyanA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyanA_exports = {};
    __export2(cyanA_exports, {
      cyanA: () => cyanA2
    });
    module2.exports = __toCommonJS2(cyanA_exports);
    var cyanA2 = {
      cyanA1: "hsla(195, 95.2%, 41.2%, 0.020)",
      cyanA2: "hsla(185, 99.9%, 42.3%, 0.051)",
      cyanA3: "hsla(186, 97.8%, 42.2%, 0.095)",
      cyanA4: "hsla(186, 99.9%, 38.5%, 0.153)",
      cyanA5: "hsla(187, 99.3%, 36.6%, 0.232)",
      cyanA6: "hsla(188, 99.4%, 35.4%, 0.334)",
      cyanA7: "hsla(189, 99.6%, 35.0%, 0.483)",
      cyanA8: "hsla(189, 99.9%, 37.6%, 0.761)",
      cyanA9: "hsla(190, 100%, 37.8%, 0.980)",
      cyanA10: "hsla(191, 99.9%, 34.6%, 0.969)",
      cyanA11: "hsla(192, 100%, 27.6%, 0.953)",
      cyanA12: "hsla(192, 100%, 11.0%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/goldA.js
var require_goldA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/goldA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var goldA_exports = {};
    __export2(goldA_exports, {
      goldA: () => goldA2
    });
    module2.exports = __toCommonJS2(goldA_exports);
    var goldA2 = {
      goldA1: "hsla(60, 89.3%, 18.3%, 0.012)",
      goldA2: "hsla(47, 99.9%, 34.6%, 0.051)",
      goldA3: "hsla(45, 97.0%, 27.9%, 0.087)",
      goldA4: "hsla(46, 98.0%, 25.4%, 0.134)",
      goldA5: "hsla(43, 98.4%, 22.6%, 0.185)",
      goldA6: "hsla(41, 99.7%, 22.0%, 0.259)",
      goldA7: "hsla(38, 99.8%, 21.5%, 0.357)",
      goldA8: "hsla(36, 99.3%, 21.5%, 0.487)",
      goldA9: "hsla(36, 99.9%, 16.2%, 0.604)",
      goldA10: "hsla(36, 99.2%, 14.6%, 0.636)",
      goldA11: "hsla(35, 99.1%, 11.2%, 0.687)",
      goldA12: "hsla(38, 98.0%, 3.8%, 0.832)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/grassA.js
var require_grassA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/grassA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grassA_exports = {};
    __export2(grassA_exports, {
      grassA: () => grassA2
    });
    module2.exports = __toCommonJS2(grassA_exports);
    var grassA2 = {
      grassA1: "hsla(120, 94.9%, 38.7%, 0.016)",
      grassA2: "hsla(120, 94.9%, 38.7%, 0.048)",
      grassA3: "hsla(120, 98.0%, 35.5%, 0.079)",
      grassA4: "hsla(120, 98.7%, 31.5%, 0.126)",
      grassA5: "hsla(122, 98.5%, 29.9%, 0.193)",
      grassA6: "hsla(125, 99.2%, 27.9%, 0.283)",
      grassA7: "hsla(125, 99.9%, 27.0%, 0.408)",
      grassA8: "hsla(131, 100%, 27.6%, 0.604)",
      grassA9: "hsla(131, 99.7%, 26.3%, 0.726)",
      grassA10: "hsla(132, 99.9%, 24.0%, 0.761)",
      grassA11: "hsla(133, 99.5%, 19.5%, 0.840)",
      grassA12: "hsla(128, 98.0%, 4.9%, 0.895)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/grayA.js
var require_grayA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/grayA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grayA_exports = {};
    __export2(grayA_exports, {
      grayA: () => grayA2
    });
    module2.exports = __toCommonJS2(grayA_exports);
    var grayA2 = {
      grayA1: "hsla(0, 0%, 0%, 0.012)",
      grayA2: "hsla(0, 0%, 0%, 0.027)",
      grayA3: "hsla(0, 0%, 0%, 0.047)",
      grayA4: "hsla(0, 0%, 0%, 0.071)",
      grayA5: "hsla(0, 0%, 0%, 0.090)",
      grayA6: "hsla(0, 0%, 0%, 0.114)",
      grayA7: "hsla(0, 0%, 0%, 0.141)",
      grayA8: "hsla(0, 0%, 0%, 0.220)",
      grayA9: "hsla(0, 0%, 0%, 0.439)",
      grayA10: "hsla(0, 0%, 0%, 0.478)",
      grayA11: "hsla(0, 0%, 0%, 0.565)",
      grayA12: "hsla(0, 0%, 0%, 0.910)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/greenA.js
var require_greenA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/greenA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var greenA_exports = {};
    __export2(greenA_exports, {
      greenA: () => greenA2
    });
    module2.exports = __toCommonJS2(greenA_exports);
    var greenA2 = {
      greenA1: "hsla(140, 94.9%, 38.7%, 0.016)",
      greenA2: "hsla(138, 99.9%, 38.5%, 0.051)",
      greenA3: "hsla(139, 97.7%, 36.9%, 0.087)",
      greenA4: "hsla(139, 98.5%, 32.7%, 0.134)",
      greenA5: "hsla(141, 100%, 30.4%, 0.200)",
      greenA6: "hsla(142, 99.0%, 28.9%, 0.295)",
      greenA7: "hsla(146, 99.5%, 27.6%, 0.428)",
      greenA8: "hsla(151, 99.5%, 28.8%, 0.644)",
      greenA9: "hsla(151, 99.9%, 28.0%, 0.812)",
      greenA10: "hsla(152, 99.6%, 25.8%, 0.840)",
      greenA11: "hsla(153, 99.9%, 21.0%, 0.906)",
      greenA12: "hsla(155, 99.4%, 6.2%, 0.918)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/indigoA.js
var require_indigoA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/indigoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigoA_exports = {};
    __export2(indigoA_exports, {
      indigoA: () => indigoA2
    });
    module2.exports = __toCommonJS2(indigoA_exports);
    var indigoA2 = {
      indigoA1: "hsla(240, 92.6%, 26.5%, 0.008)",
      indigoA2: "hsla(223, 100%, 51.0%, 0.028)",
      indigoA3: "hsla(224, 100%, 50.1%, 0.059)",
      indigoA4: "hsla(223, 98.0%, 48.5%, 0.099)",
      indigoA5: "hsla(225, 98.6%, 46.4%, 0.150)",
      indigoA6: "hsla(224, 99.5%, 44.9%, 0.224)",
      indigoA7: "hsla(225, 99.7%, 43.9%, 0.318)",
      indigoA8: "hsla(226, 99.5%, 43.1%, 0.448)",
      indigoA9: "hsla(226, 100%, 41.2%, 0.757)",
      indigoA10: "hsla(226, 99.8%, 37.1%, 0.773)",
      indigoA11: "hsla(226, 99.6%, 31.1%, 0.797)",
      indigoA12: "hsla(226, 99.3%, 11.4%, 0.938)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/limeA.js
var require_limeA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/limeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var limeA_exports = {};
    __export2(limeA_exports, {
      limeA: () => limeA2
    });
    module2.exports = __toCommonJS2(limeA_exports);
    var limeA2 = {
      limeA1: "hsla(80, 93.8%, 31.4%, 0.020)",
      limeA2: "hsla(85, 99.3%, 40.2%, 0.059)",
      limeA3: "hsla(84, 98.7%, 43.2%, 0.138)",
      limeA4: "hsla(84, 99.6%, 43.0%, 0.220)",
      limeA5: "hsla(85, 99.8%, 41.8%, 0.310)",
      limeA6: "hsla(82, 99.8%, 39.3%, 0.420)",
      limeA7: "hsla(79, 99.7%, 34.6%, 0.585)",
      limeA8: "hsla(76, 99.8%, 33.7%, 0.828)",
      limeA9: "hsla(81, 99.8%, 40.2%, 0.836)",
      limeA10: "hsla(80, 100%, 37.6%, 0.851)",
      limeA11: "hsla(75, 99.5%, 22.0%, 0.950)",
      limeA12: "hsla(78, 99.6%, 8.4%, 0.965)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/mintA.js
var require_mintA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/mintA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mintA_exports = {};
    __export2(mintA_exports, {
      mintA: () => mintA2
    });
    module2.exports = __toCommonJS2(mintA_exports);
    var mintA2 = {
      mintA1: "hsla(168, 95.4%, 42.8%, 0.024)",
      mintA2: "hsla(164, 99.1%, 47.1%, 0.063)",
      mintA3: "hsla(164, 99.3%, 43.5%, 0.118)",
      mintA4: "hsla(164, 99.3%, 41.3%, 0.177)",
      mintA5: "hsla(165, 99.0%, 37.5%, 0.248)",
      mintA6: "hsla(165, 100%, 35.0%, 0.353)",
      mintA7: "hsla(166, 99.9%, 33.5%, 0.510)",
      mintA8: "hsla(168, 99.6%, 34.6%, 0.750)",
      mintA9: "hsla(167, 99.9%, 39.5%, 0.561)",
      mintA10: "hsla(167, 99.7%, 37.4%, 0.589)",
      mintA11: "hsla(172, 99.8%, 22.4%, 0.922)",
      mintA12: "hsla(172, 99.7%, 8.8%, 0.965)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/oliveA.js
var require_oliveA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/oliveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var oliveA_exports = {};
    __export2(oliveA_exports, {
      oliveA: () => oliveA2
    });
    module2.exports = __toCommonJS2(oliveA_exports);
    var oliveA2 = {
      oliveA1: "hsla(120, 89.3%, 18.3%, 0.012)",
      oliveA2: "hsla(120, 87.7%, 16.0%, 0.028)",
      oliveA3: "hsla(120, 99.5%, 7.7%, 0.051)",
      oliveA4: "hsla(120, 92.3%, 8.5%, 0.075)",
      oliveA5: "hsla(120, 86.0%, 6.9%, 0.099)",
      oliveA6: "hsla(120, 94.8%, 6.8%, 0.122)",
      oliveA7: "hsla(120, 99.3%, 5.2%, 0.153)",
      oliveA8: "hsla(110, 93.8%, 5.2%, 0.240)",
      oliveA9: "hsla(111, 98.7%, 3.0%, 0.459)",
      oliveA10: "hsla(111, 93.5%, 2.9%, 0.499)",
      oliveA11: "hsla(111, 95.2%, 2.5%, 0.585)",
      oliveA12: "hsla(110, 97.6%, 2.6%, 0.930)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/orangeA.js
var require_orangeA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/orangeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orangeA_exports = {};
    __export2(orangeA_exports, {
      orangeA: () => orangeA2
    });
    module2.exports = __toCommonJS2(orangeA_exports);
    var orangeA2 = {
      orangeA1: "hsla(20, 94.9%, 38.7%, 0.016)",
      orangeA2: "hsla(24, 95.8%, 46.5%, 0.044)",
      orangeA3: "hsla(25, 100%, 50.5%, 0.095)",
      orangeA4: "hsla(26, 100%, 50.0%, 0.157)",
      orangeA5: "hsla(25, 100%, 50.1%, 0.236)",
      orangeA6: "hsla(25, 100%, 50.1%, 0.346)",
      orangeA7: "hsla(24, 100%, 50.1%, 0.495)",
      orangeA8: "hsla(24, 99.7%, 48.7%, 0.695)",
      orangeA9: "hsla(24, 99.9%, 48.4%, 0.969)",
      orangeA10: "hsla(23, 100%, 46.4%, 0.980)",
      orangeA11: "hsla(23, 100%, 36.8%, 0.980)",
      orangeA12: "hsla(15, 99.4%, 11.0%, 0.934)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/pinkA.js
var require_pinkA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/pinkA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pinkA_exports = {};
    __export2(pinkA_exports, {
      pinkA: () => pinkA2
    });
    module2.exports = __toCommonJS2(pinkA_exports);
    var pinkA2 = {
      pinkA1: "hsla(320, 100%, 51.0%, 0.012)",
      pinkA2: "hsla(323, 100%, 51.0%, 0.032)",
      pinkA3: "hsla(323, 98.9%, 47.3%, 0.067)",
      pinkA4: "hsla(323, 99.9%, 44.3%, 0.102)",
      pinkA5: "hsla(324, 99.9%, 42.3%, 0.153)",
      pinkA6: "hsla(323, 99.5%, 39.6%, 0.224)",
      pinkA7: "hsla(323, 99.7%, 38.5%, 0.322)",
      pinkA8: "hsla(323, 99.5%, 37.7%, 0.444)",
      pinkA9: "hsla(322, 99.7%, 39.3%, 0.750)",
      pinkA10: "hsla(322, 100%, 39.1%, 0.808)",
      pinkA11: "hsla(322, 99.8%, 39.0%, 0.887)",
      pinkA12: "hsla(321, 99.8%, 10.0%, 0.961)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/plumA.js
var require_plumA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/plumA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plumA_exports = {};
    __export2(plumA_exports, {
      plumA: () => plumA2
    });
    module2.exports = __toCommonJS2(plumA_exports);
    var plumA2 = {
      plumA1: "hsla(280, 100%, 51.0%, 0.012)",
      plumA2: "hsla(300, 100%, 51.0%, 0.028)",
      plumA3: "hsla(300, 99.0%, 40.9%, 0.063)",
      plumA4: "hsla(300, 99.9%, 38.5%, 0.102)",
      plumA5: "hsla(298, 98.2%, 35.9%, 0.150)",
      plumA6: "hsla(297, 99.6%, 33.7%, 0.216)",
      plumA7: "hsla(295, 99.7%, 32.6%, 0.314)",
      plumA8: "hsla(292, 99.6%, 32.4%, 0.432)",
      plumA9: "hsla(292, 99.9%, 31.0%, 0.710)",
      plumA10: "hsla(292, 99.9%, 30.8%, 0.765)",
      plumA11: "hsla(292, 99.8%, 30.7%, 0.832)",
      plumA12: "hsla(291, 99.9%, 9.7%, 0.953)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/purpleA.js
var require_purpleA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/purpleA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purpleA_exports = {};
    __export2(purpleA_exports, {
      purpleA: () => purpleA2
    });
    module2.exports = __toCommonJS2(purpleA_exports);
    var purpleA2 = {
      purpleA1: "hsla(300, 94.3%, 34.6%, 0.012)",
      purpleA2: "hsla(276, 100%, 51.0%, 0.020)",
      purpleA3: "hsla(277, 99.6%, 46.5%, 0.055)",
      purpleA4: "hsla(274, 97.9%, 44.3%, 0.095)",
      purpleA5: "hsla(276, 98.6%, 42.0%, 0.142)",
      purpleA6: "hsla(275, 100%, 39.2%, 0.200)",
      purpleA7: "hsla(273, 99.2%, 38.2%, 0.295)",
      purpleA8: "hsla(272, 99.7%, 37.6%, 0.424)",
      purpleA9: "hsla(272, 99.6%, 34.0%, 0.695)",
      purpleA10: "hsla(272, 99.7%, 32.0%, 0.730)",
      purpleA11: "hsla(272, 99.8%, 29.7%, 0.773)",
      purpleA12: "hsla(272, 99.2%, 11.3%, 0.946)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/mauveA.js
var require_mauveA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/mauveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauveA_exports = {};
    __export2(mauveA_exports, {
      mauveA: () => mauveA2
    });
    module2.exports = __toCommonJS2(mauveA_exports);
    var mauveA2 = {
      mauveA1: "hsla(300, 89.3%, 18.3%, 0.012)",
      mauveA2: "hsla(300, 78.1%, 9.0%, 0.028)",
      mauveA3: "hsla(300, 99.5%, 7.7%, 0.051)",
      mauveA4: "hsla(270, 90.5%, 6.1%, 0.071)",
      mauveA5: "hsla(270, 83.0%, 5.2%, 0.091)",
      mauveA6: "hsla(300, 93.5%, 3.7%, 0.114)",
      mauveA7: "hsla(270, 82.6%, 3.3%, 0.142)",
      mauveA8: "hsla(255, 95.2%, 3.7%, 0.220)",
      mauveA9: "hsla(255, 94.8%, 3.7%, 0.444)",
      mauveA10: "hsla(253, 96.5%, 3.8%, 0.483)",
      mauveA11: "hsla(247, 97.9%, 3.2%, 0.569)",
      mauveA12: "hsla(261, 98.7%, 3.0%, 0.918)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/redA.js
var require_redA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/redA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var redA_exports = {};
    __export2(redA_exports, {
      redA: () => redA2
    });
    module2.exports = __toCommonJS2(redA_exports);
    var redA2 = {
      redA1: "hsla(0, 100%, 51.0%, 0.012)",
      redA2: "hsla(0, 100%, 51.0%, 0.032)",
      redA3: "hsla(0, 100%, 50.2%, 0.063)",
      redA4: "hsla(0, 100%, 50.0%, 0.102)",
      redA5: "hsla(0, 99.9%, 47.5%, 0.153)",
      redA6: "hsla(0, 99.5%, 44.9%, 0.224)",
      redA7: "hsla(359, 99.7%, 42.7%, 0.318)",
      redA8: "hsla(359, 99.6%, 41.1%, 0.436)",
      redA9: "hsla(358, 99.9%, 42.9%, 0.718)",
      redA10: "hsla(358, 99.9%, 41.0%, 0.761)",
      redA11: "hsla(358, 99.8%, 38.3%, 0.832)",
      redA12: "hsla(355, 99.3%, 7.9%, 0.926)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/sageA.js
var require_sageA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/sageA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sageA_exports = {};
    __export2(sageA_exports, {
      sageA: () => sageA2
    });
    module2.exports = __toCommonJS2(sageA_exports);
    var sageA2 = {
      sageA1: "hsla(150, 92.6%, 26.5%, 0.016)",
      sageA2: "hsla(150, 87.7%, 16.0%, 0.028)",
      sageA3: "hsla(160, 98.4%, 10.9%, 0.055)",
      sageA4: "hsla(140, 92.3%, 8.5%, 0.075)",
      sageA5: "hsla(160, 86.0%, 6.9%, 0.099)",
      sageA6: "hsla(156, 95.1%, 8.2%, 0.126)",
      sageA7: "hsla(156, 98.6%, 6.3%, 0.157)",
      sageA8: "hsla(154, 94.6%, 6.0%, 0.240)",
      sageA9: "hsla(154, 98.7%, 3.0%, 0.459)",
      sageA10: "hsla(154, 93.5%, 2.9%, 0.499)",
      sageA11: "hsla(154, 95.2%, 2.5%, 0.585)",
      sageA12: "hsla(158, 97.0%, 2.4%, 0.934)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/sandA.js
var require_sandA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/sandA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sandA_exports = {};
    __export2(sandA_exports, {
      sandA: () => sandA2
    });
    module2.exports = __toCommonJS2(sandA_exports);
    var sandA2 = {
      sandA1: "hsla(60, 89.3%, 18.3%, 0.012)",
      sandA2: "hsla(60, 78.1%, 9.0%, 0.028)",
      sandA3: "hsla(60, 99.0%, 3.9%, 0.051)",
      sandA4: "hsla(60, 88.9%, 5.9%, 0.075)",
      sandA5: "hsla(60, 86.0%, 6.9%, 0.099)",
      sandA6: "hsla(60, 93.2%, 5.2%, 0.122)",
      sandA7: "hsla(60, 98.3%, 5.1%, 0.157)",
      sandA8: "hsla(51, 94.1%, 6.0%, 0.244)",
      sandA9: "hsla(60, 99.8%, 1.7%, 0.451)",
      sandA10: "hsla(60, 90.7%, 1.8%, 0.491)",
      sandA11: "hsla(45, 93.7%, 1.5%, 0.577)",
      sandA12: "hsla(60, 98.0%, 0.7%, 0.906)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/skyA.js
var require_skyA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/skyA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var skyA_exports = {};
    __export2(skyA_exports, {
      skyA: () => skyA2
    });
    module2.exports = __toCommonJS2(skyA_exports);
    var skyA2 = {
      skyA1: "hsla(190, 100%, 51.0%, 0.024)",
      skyA2: "hsla(193, 100%, 50.1%, 0.055)",
      skyA3: "hsla(193, 100%, 50.1%, 0.106)",
      skyA4: "hsla(194, 99.6%, 47.7%, 0.165)",
      skyA5: "hsla(194, 99.2%, 45.4%, 0.244)",
      skyA6: "hsla(194, 99.9%, 42.3%, 0.357)",
      skyA7: "hsla(194, 99.8%, 42.2%, 0.526)",
      skyA8: "hsla(193, 99.9%, 43.8%, 0.820)",
      skyA9: "hsla(193, 99.7%, 49.4%, 0.593)",
      skyA10: "hsla(193, 99.8%, 46.6%, 0.628)",
      skyA11: "hsla(196, 100%, 31.2%, 0.980)",
      skyA12: "hsla(196, 100%, 12.2%, 0.980)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/slateA.js
var require_slateA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/slateA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slateA_exports = {};
    __export2(slateA_exports, {
      slateA: () => slateA2
    });
    module2.exports = __toCommonJS2(slateA_exports);
    var slateA2 = {
      slateA1: "hsla(210, 92.6%, 26.5%, 0.016)",
      slateA2: "hsla(210, 87.7%, 16.0%, 0.028)",
      slateA3: "hsla(210, 98.8%, 14.4%, 0.055)",
      slateA4: "hsla(210, 94.1%, 11.1%, 0.075)",
      slateA5: "hsla(216, 91.1%, 10.9%, 0.099)",
      slateA6: "hsla(206, 96.4%, 11.3%, 0.126)",
      slateA7: "hsla(210, 99.1%, 10.1%, 0.157)",
      slateA8: "hsla(205, 96.5%, 10.0%, 0.244)",
      slateA9: "hsla(206, 98.8%, 5.9%, 0.467)",
      slateA10: "hsla(206, 99.6%, 5.4%, 0.506)",
      slateA11: "hsla(206, 97.0%, 4.8%, 0.593)",
      slateA12: "hsla(202, 97.0%, 2.4%, 0.934)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/tealA.js
var require_tealA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/tealA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tealA_exports = {};
    __export2(tealA_exports, {
      tealA: () => tealA2
    });
    module2.exports = __toCommonJS2(tealA_exports);
    var tealA2 = {
      tealA1: "hsla(165, 95.2%, 41.2%, 0.020)",
      tealA2: "hsla(169, 99.5%, 39.4%, 0.055)",
      tealA3: "hsla(167, 97.6%, 38.1%, 0.095)",
      tealA4: "hsla(168, 98.1%, 34.6%, 0.150)",
      tealA5: "hsla(170, 99.4%, 32.3%, 0.220)",
      tealA6: "hsla(170, 99.7%, 30.1%, 0.314)",
      tealA7: "hsla(170, 99.3%, 28.7%, 0.448)",
      tealA8: "hsla(172, 99.8%, 29.7%, 0.675)",
      tealA9: "hsla(173, 99.8%, 31.1%, 0.930)",
      tealA10: "hsla(173, 99.7%, 28.7%, 0.946)",
      tealA11: "hsla(174, 99.8%, 23.3%, 0.977)",
      tealA12: "hsla(171, 98.8%, 6.8%, 0.938)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/tomatoA.js
var require_tomatoA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/tomatoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomatoA_exports = {};
    __export2(tomatoA_exports, {
      tomatoA: () => tomatoA2
    });
    module2.exports = __toCommonJS2(tomatoA_exports);
    var tomatoA2 = {
      tomatoA1: "hsla(0, 100%, 51.0%, 0.012)",
      tomatoA2: "hsla(8, 100%, 51.0%, 0.032)",
      tomatoA3: "hsla(7, 100%, 50.2%, 0.067)",
      tomatoA4: "hsla(8, 100%, 50.1%, 0.114)",
      tomatoA5: "hsla(7, 99.5%, 47.9%, 0.173)",
      tomatoA6: "hsla(9, 99.9%, 46.2%, 0.255)",
      tomatoA7: "hsla(10, 99.8%, 43.6%, 0.365)",
      tomatoA8: "hsla(10, 99.5%, 41.8%, 0.499)",
      tomatoA9: "hsla(10, 99.9%, 43.8%, 0.820)",
      tomatoA10: "hsla(10, 100%, 41.8%, 0.859)",
      tomatoA11: "hsla(10, 99.9%, 38.8%, 0.922)",
      tomatoA12: "hsla(10, 99.0%, 7.4%, 0.934)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/violetA.js
var require_violetA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/violetA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violetA_exports = {};
    __export2(violetA_exports, {
      violetA: () => violetA2
    });
    module2.exports = __toCommonJS2(violetA_exports);
    var violetA2 = {
      violetA1: "hsla(270, 94.3%, 34.6%, 0.012)",
      violetA2: "hsla(252, 100%, 51.0%, 0.020)",
      violetA3: "hsla(254, 100%, 50.0%, 0.051)",
      violetA4: "hsla(251, 98.3%, 48.2%, 0.087)",
      violetA5: "hsla(252, 99.0%, 45.7%, 0.130)",
      violetA6: "hsla(251, 99.1%, 44.0%, 0.189)",
      violetA7: "hsla(252, 99.5%, 41.7%, 0.279)",
      violetA8: "hsla(252, 100%, 40.7%, 0.400)",
      violetA9: "hsla(252, 99.9%, 35.8%, 0.663)",
      violetA10: "hsla(251, 99.6%, 32.5%, 0.691)",
      violetA11: "hsla(250, 99.8%, 28.4%, 0.726)",
      violetA12: "hsla(254, 99.5%, 11.9%, 0.926)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/light/yellowA.js
var require_yellowA2 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/light/yellowA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellowA_exports = {};
    __export2(yellowA_exports, {
      yellowA: () => yellowA2
    });
    module2.exports = __toCommonJS2(yellowA_exports);
    var yellowA2 = {
      yellowA1: "hsla(60, 94.3%, 34.6%, 0.024)",
      yellowA2: "hsla(52, 100%, 50.4%, 0.091)",
      yellowA3: "hsla(55, 100%, 50.2%, 0.181)",
      yellowA4: "hsla(54, 100%, 50.1%, 0.267)",
      yellowA5: "hsla(52, 99.9%, 49.5%, 0.357)",
      yellowA6: "hsla(50, 100%, 47.4%, 0.451)",
      yellowA7: "hsla(47, 99.8%, 44.6%, 0.577)",
      yellowA8: "hsla(48, 100%, 46.0%, 0.980)",
      yellowA9: "hsla(53, 100%, 48.0%, 0.961)",
      yellowA10: "hsla(50, 100%, 48.4%, 0.980)",
      yellowA11: "hsla(42, 100%, 28.6%, 0.980)",
      yellowA12: "hsla(41, 98.9%, 8.0%, 0.942)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/blackA.js
var require_blackA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/blackA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blackA_exports = {};
    __export2(blackA_exports, {
      blackA: () => blackA2
    });
    module2.exports = __toCommonJS2(blackA_exports);
    var blackA2 = {
      blackA1: "hsla(0, 0%, 0%, 0.012)",
      blackA2: "hsla(0, 0%, 0%, 0.027)",
      blackA3: "hsla(0, 0%, 0%, 0.047)",
      blackA4: "hsla(0, 0%, 0%, 0.071)",
      blackA5: "hsla(0, 0%, 0%, 0.090)",
      blackA6: "hsla(0, 0%, 0%, 0.114)",
      blackA7: "hsla(0, 0%, 0%, 0.141)",
      blackA8: "hsla(0, 0%, 0%, 0.220)",
      blackA9: "hsla(0, 0%, 0%, 0.439)",
      blackA10: "hsla(0, 0%, 0%, 0.478)",
      blackA11: "hsla(0, 0%, 0%, 0.565)",
      blackA12: "hsla(0, 0%, 0%, 0.910)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/whiteA.js
var require_whiteA = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/whiteA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var whiteA_exports = {};
    __export2(whiteA_exports, {
      whiteA: () => whiteA2
    });
    module2.exports = __toCommonJS2(whiteA_exports);
    var whiteA2 = {
      whiteA1: "hsla(0, 0%, 100%, 0)",
      whiteA2: "hsla(0, 0%, 100%, 0.013)",
      whiteA3: "hsla(0, 0%, 100%, 0.034)",
      whiteA4: "hsla(0, 0%, 100%, 0.056)",
      whiteA5: "hsla(0, 0%, 100%, 0.086)",
      whiteA6: "hsla(0, 0%, 100%, 0.124)",
      whiteA7: "hsla(0, 0%, 100%, 0.176)",
      whiteA8: "hsla(0, 0%, 100%, 0.249)",
      whiteA9: "hsla(0, 0%, 100%, 0.386)",
      whiteA10: "hsla(0, 0%, 100%, 0.446)",
      whiteA11: "hsla(0, 0%, 100%, 0.592)",
      whiteA12: "hsla(0, 0%, 100%, 0.923)"
    };
  }
});

// ../../node_modules/@tamagui/colors/dist/cjs/index.js
var require_cjs45 = __commonJS({
  "../../node_modules/@tamagui/colors/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      amber: () => import_amber2.amber,
      amberA: () => import_amberA2.amberA,
      amberDark: () => import_amber.amber,
      amberDarkA: () => import_amberA.amberA,
      blackA: () => import_blackA.blackA,
      blue: () => import_blue2.blue,
      blueA: () => import_blueA2.blueA,
      blueDark: () => import_blue.blue,
      blueDarkA: () => import_blueA.blueA,
      bronze: () => import_bronze2.bronze,
      bronzeA: () => import_bronzeA2.bronzeA,
      bronzeDark: () => import_bronze.bronze,
      bronzeDarkA: () => import_bronzeA.bronzeA,
      brown: () => import_brown2.brown,
      brownA: () => import_brownA2.brownA,
      brownDark: () => import_brown.brown,
      brownDarkA: () => import_brownA.brownA,
      crimson: () => import_crimson2.crimson,
      crimsonA: () => import_crimsonA2.crimsonA,
      crimsonDark: () => import_crimson.crimson,
      crimsonDarkA: () => import_crimsonA.crimsonA,
      cyan: () => import_cyan2.cyan,
      cyanA: () => import_cyanA2.cyanA,
      cyanDark: () => import_cyan.cyan,
      cyanDarkA: () => import_cyanA.cyanA,
      gold: () => import_gold2.gold,
      goldA: () => import_goldA2.goldA,
      goldDark: () => import_gold.gold,
      goldDarkA: () => import_goldA.goldA,
      grass: () => import_grass2.grass,
      grassA: () => import_grassA2.grassA,
      grassDark: () => import_grass.grass,
      grassDarkA: () => import_grassA.grassA,
      gray: () => import_gray2.gray,
      grayA: () => import_grayA2.grayA,
      grayDark: () => import_gray.gray,
      grayDarkA: () => import_grayA.grayA,
      green: () => import_green2.green,
      greenA: () => import_greenA2.greenA,
      greenDark: () => import_green.green,
      greenDarkA: () => import_greenA.greenA,
      indigo: () => import_indigo2.indigo,
      indigoA: () => import_indigoA2.indigoA,
      indigoDark: () => import_indigo.indigo,
      indigoDarkA: () => import_indigoA.indigoA,
      lime: () => import_lime2.lime,
      limeA: () => import_limeA2.limeA,
      limeDark: () => import_lime.lime,
      limeDarkA: () => import_limeA.limeA,
      mauve: () => import_mauve2.mauve,
      mauveA: () => import_mauveA2.mauveA,
      mauveDark: () => import_mauve.mauve,
      mauveDarkA: () => import_mauveA.mauveA,
      mint: () => import_mint2.mint,
      mintA: () => import_mintA2.mintA,
      mintDark: () => import_mint.mint,
      mintDarkA: () => import_mintA.mintA,
      olive: () => import_olive2.olive,
      oliveA: () => import_oliveA2.oliveA,
      oliveDark: () => import_olive.olive,
      oliveDarkA: () => import_oliveA.oliveA,
      orange: () => import_orange2.orange,
      orangeA: () => import_orangeA2.orangeA,
      orangeDark: () => import_orange.orange,
      orangeDarkA: () => import_orangeA.orangeA,
      pink: () => import_pink2.pink,
      pinkA: () => import_pinkA2.pinkA,
      pinkDark: () => import_pink.pink,
      pinkDarkA: () => import_pinkA.pinkA,
      plum: () => import_plum2.plum,
      plumA: () => import_plumA2.plumA,
      plumDark: () => import_plum.plum,
      plumDarkA: () => import_plumA.plumA,
      purple: () => import_purple2.purple,
      purpleA: () => import_purpleA2.purpleA,
      purpleDark: () => import_purple.purple,
      purpleDarkA: () => import_purpleA.purpleA,
      red: () => import_red2.red,
      redA: () => import_redA2.redA,
      redDark: () => import_red.red,
      redDarkA: () => import_redA.redA,
      sage: () => import_sage2.sage,
      sageA: () => import_sageA2.sageA,
      sageDark: () => import_sage.sage,
      sageDarkA: () => import_sageA.sageA,
      sand: () => import_sand2.sand,
      sandA: () => import_sandA2.sandA,
      sandDark: () => import_sand.sand,
      sandDarkA: () => import_sandA.sandA,
      sky: () => import_sky2.sky,
      skyA: () => import_skyA2.skyA,
      skyDark: () => import_sky.sky,
      skyDarkA: () => import_skyA.skyA,
      slate: () => import_slate2.slate,
      slateA: () => import_slateA2.slateA,
      slateDark: () => import_slate.slate,
      slateDarkA: () => import_slateA.slateA,
      teal: () => import_teal2.teal,
      tealA: () => import_tealA2.tealA,
      tealDark: () => import_teal.teal,
      tealDarkA: () => import_tealA.tealA,
      tomato: () => import_tomato2.tomato,
      tomatoA: () => import_tomatoA2.tomatoA,
      tomatoDark: () => import_tomato.tomato,
      tomatoDarkA: () => import_tomatoA.tomatoA,
      violet: () => import_violet2.violet,
      violetA: () => import_violetA2.violetA,
      violetDark: () => import_violet.violet,
      violetDarkA: () => import_violetA.violetA,
      whiteA: () => import_whiteA.whiteA,
      yellow: () => import_yellow2.yellow,
      yellowA: () => import_yellowA2.yellowA,
      yellowDark: () => import_yellow.yellow,
      yellowDarkA: () => import_yellowA.yellowA
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_amber = require_amber();
    var import_blue = require_blue();
    var import_bronze = require_bronze();
    var import_brown = require_brown();
    var import_crimson = require_crimson();
    var import_cyan = require_cyan();
    var import_gold = require_gold();
    var import_grass = require_grass();
    var import_gray = require_gray();
    var import_green = require_green();
    var import_indigo = require_indigo();
    var import_lime = require_lime();
    var import_mint = require_mint();
    var import_olive = require_olive();
    var import_orange = require_orange();
    var import_pink = require_pink();
    var import_plum = require_plum();
    var import_purple = require_purple();
    var import_mauve = require_mauve();
    var import_red = require_red();
    var import_sage = require_sage();
    var import_sand = require_sand();
    var import_sky = require_sky();
    var import_slate = require_slate();
    var import_teal = require_teal();
    var import_tomato = require_tomato();
    var import_violet = require_violet();
    var import_yellow = require_yellow();
    var import_amberA = require_amberA();
    var import_blueA = require_blueA();
    var import_bronzeA = require_bronzeA();
    var import_brownA = require_brownA();
    var import_crimsonA = require_crimsonA();
    var import_cyanA = require_cyanA();
    var import_goldA = require_goldA();
    var import_grassA = require_grassA();
    var import_grayA = require_grayA();
    var import_greenA = require_greenA();
    var import_indigoA = require_indigoA();
    var import_limeA = require_limeA();
    var import_mintA = require_mintA();
    var import_oliveA = require_oliveA();
    var import_orangeA = require_orangeA();
    var import_pinkA = require_pinkA();
    var import_plumA = require_plumA();
    var import_purpleA = require_purpleA();
    var import_mauveA = require_mauveA();
    var import_redA = require_redA();
    var import_sageA = require_sageA();
    var import_sandA = require_sandA();
    var import_skyA = require_skyA();
    var import_slateA = require_slateA();
    var import_tealA = require_tealA();
    var import_tomatoA = require_tomatoA();
    var import_violetA = require_violetA();
    var import_yellowA = require_yellowA();
    var import_amber2 = require_amber2();
    var import_blue2 = require_blue2();
    var import_bronze2 = require_bronze2();
    var import_brown2 = require_brown2();
    var import_crimson2 = require_crimson2();
    var import_cyan2 = require_cyan2();
    var import_gold2 = require_gold2();
    var import_grass2 = require_grass2();
    var import_gray2 = require_gray2();
    var import_green2 = require_green2();
    var import_indigo2 = require_indigo2();
    var import_lime2 = require_lime2();
    var import_mint2 = require_mint2();
    var import_olive2 = require_olive2();
    var import_orange2 = require_orange2();
    var import_pink2 = require_pink2();
    var import_plum2 = require_plum2();
    var import_purple2 = require_purple2();
    var import_mauve2 = require_mauve2();
    var import_red2 = require_red2();
    var import_sage2 = require_sage2();
    var import_sand2 = require_sand2();
    var import_sky2 = require_sky2();
    var import_slate2 = require_slate2();
    var import_teal2 = require_teal2();
    var import_tomato2 = require_tomato2();
    var import_violet2 = require_violet2();
    var import_yellow2 = require_yellow2();
    var import_amberA2 = require_amberA2();
    var import_blueA2 = require_blueA2();
    var import_bronzeA2 = require_bronzeA2();
    var import_brownA2 = require_brownA2();
    var import_crimsonA2 = require_crimsonA2();
    var import_cyanA2 = require_cyanA2();
    var import_goldA2 = require_goldA2();
    var import_grassA2 = require_grassA2();
    var import_grayA2 = require_grayA2();
    var import_greenA2 = require_greenA2();
    var import_indigoA2 = require_indigoA2();
    var import_limeA2 = require_limeA2();
    var import_mintA2 = require_mintA2();
    var import_oliveA2 = require_oliveA2();
    var import_orangeA2 = require_orangeA2();
    var import_pinkA2 = require_pinkA2();
    var import_plumA2 = require_plumA2();
    var import_purpleA2 = require_purpleA2();
    var import_mauveA2 = require_mauveA2();
    var import_redA2 = require_redA2();
    var import_sageA2 = require_sageA2();
    var import_sandA2 = require_sandA2();
    var import_skyA2 = require_skyA2();
    var import_slateA2 = require_slateA2();
    var import_tealA2 = require_tealA2();
    var import_tomatoA2 = require_tomatoA2();
    var import_violetA2 = require_violetA2();
    var import_yellowA2 = require_yellowA2();
    var import_blackA = require_blackA();
    var import_whiteA = require_whiteA();
  }
});

// ../../node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js
var require_polyfill = __commonJS({
  "../../node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js"() {
    "use strict";
    if (typeof requestAnimationFrame === "undefined") {
      globalThis["requestAnimationFrame"] = setImmediate;
    }
  }
});

// ../../node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js
var require_createAnimations = __commonJS({
  "../../node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createAnimations_exports = {};
    __export2(createAnimations_exports, {
      AnimatedText: () => AnimatedText,
      AnimatedView: () => AnimatedView,
      createAnimations: () => createAnimations2,
      useAnimatedNumber: () => useAnimatedNumber,
      useAnimatedNumberReaction: () => useAnimatedNumberReaction,
      useAnimatedNumberStyle: () => useAnimatedNumberStyle
    });
    module2.exports = __toCommonJS2(createAnimations_exports);
    var import_animate_presence = require_cjs();
    var import_core4 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_react_native3 = require("react-native-web-lite");
    var animatedStyleKey = {
      transform: true,
      opacity: true
    };
    var AnimatedView = import_react_native3.Animated.View;
    var AnimatedText = import_react_native3.Animated.Text;
    function useAnimatedNumber(initial) {
      const state = (0, import_react.useRef)(
        null
      );
      if (!state.current) {
        state.current = {
          composite: null,
          val: new import_react_native3.Animated.Value(initial),
          strategy: { type: "spring" }
        };
      }
      return {
        getInstance() {
          return state.current.val;
        },
        getValue() {
          return state.current.val["_value"];
        },
        stop() {
          var _a;
          (_a = state.current.composite) == null ? void 0 : _a.stop();
          state.current.composite = null;
        },
        setValue(next, { type, ...config2 } = { type: "spring" }) {
          var _a, _b;
          const val = state.current.val;
          if (type === "direct") {
            val.setValue(next);
          } else if (type === "spring") {
            (_a = state.current.composite) == null ? void 0 : _a.stop();
            const composite = import_react_native3.Animated.spring(val, {
              ...config2,
              toValue: next,
              useNativeDriver: !import_core4.isWeb
            });
            composite.start();
            state.current.composite = composite;
          } else {
            (_b = state.current.composite) == null ? void 0 : _b.stop();
            const composite = import_react_native3.Animated.timing(val, {
              ...config2,
              toValue: next,
              useNativeDriver: !import_core4.isWeb
            });
            composite.start();
            state.current.composite = composite;
          }
        }
      };
    }
    __name(useAnimatedNumber, "useAnimatedNumber");
    function useAnimatedNumberReaction(value, cb) {
      const onChange = (0, import_core4.useEvent)((current) => {
        cb(current.value);
      });
      (0, import_react.useEffect)(() => {
        const id = value.getInstance().addListener(onChange);
        return () => {
          value.getInstance().removeListener(id);
        };
      }, [value, onChange]);
    }
    __name(useAnimatedNumberReaction, "useAnimatedNumberReaction");
    function useAnimatedNumberStyle(value, getStyle) {
      return getStyle(value.getInstance());
    }
    __name(useAnimatedNumberStyle, "useAnimatedNumberStyle");
    function createAnimations2(animations2) {
      AnimatedView["displayName"] = "AnimatedView";
      AnimatedText["displayName"] = "AnimatedText";
      return {
        avoidClasses: true,
        animations: animations2,
        View: AnimatedView,
        Text: AnimatedText,
        useAnimatedNumber,
        useAnimatedNumberReaction,
        useAnimatedNumberStyle,
        useAnimations: (props, helpers) => {
          var _a;
          const { onDidAnimate, delay, getStyle, state } = helpers;
          const [isPresent, sendExitComplete] = (0, import_animate_presence.usePresence)();
          const presence = (0, import_react.useContext)(import_animate_presence.PresenceContext);
          const isExiting = isPresent === false;
          const isEntering = !state.mounted;
          const all = getStyle({
            isExiting,
            isEntering,
            exitVariant: presence == null ? void 0 : presence.exitVariant,
            enterVariant: presence == null ? void 0 : presence.enterVariant
          });
          const animateStyles = (0, import_react.useRef)({});
          const animatedTranforms = (0, import_react.useRef)([]);
          const interpolations = (0, import_react.useRef)(/* @__PURE__ */ new WeakMap());
          const runners = [];
          const completions = [];
          function update(key, animated, valIn) {
            const [val, type] = getValue(valIn);
            const value = animated || new import_react_native3.Animated.Value(val);
            if (type) {
              interpolations.current.set(value, getInterpolated(value, type, val));
            }
            if (animated) {
              const animationConfig = getAnimationConfig(key, animations2, props.animation);
              let resolve;
              const promise = new Promise((res) => {
                resolve = res;
              });
              completions.push(promise);
              runners.push(() => {
                import_react_native3.Animated.spring(animated, {
                  toValue: val,
                  useNativeDriver: !import_core4.isWeb,
                  ...animationConfig
                }).start(({ finished }) => {
                  if (finished) {
                    resolve();
                  }
                });
              });
            }
            return value;
          }
          __name(update, "update");
          function getValue(input) {
            if (typeof input !== "string") {
              return [input];
            }
            const neg = input[0] === "-";
            if (neg)
              input = input.slice(1);
            const [_, number, after] = input.match(/([-0-9]+)(deg|%)/) ?? [];
            return [+number * (neg ? -1 : 1), after];
          }
          __name(getValue, "getValue");
          const nonAnimatedStyle = {};
          for (const key in all) {
            const val = all[key];
            if (animatedStyleKey[key]) {
              if (key === "transform") {
                if (val) {
                  for (const [index, transform] of val.entries()) {
                    if (!transform)
                      continue;
                    const tkey = Object.keys(transform)[0];
                    animatedTranforms.current[index] = {
                      [tkey]: update(tkey, (_a = animatedTranforms.current[index]) == null ? void 0 : _a[tkey], transform[tkey])
                    };
                  }
                }
              } else {
                animateStyles.current[key] = update(key, animateStyles.current[key], val);
              }
            } else {
              nonAnimatedStyle[key] = val;
            }
          }
          const animatedStyle = {
            ...Object.fromEntries(
              Object.entries({
                ...animateStyles.current
              }).map(([k, v]) => [k, interpolations.current.get(v) || v])
            ),
            transform: animatedTranforms.current.map((r) => {
              const key = Object.keys(r)[0];
              const val = interpolations.current.get(r[key]) || r[key];
              return { [key]: val };
            })
          };
          const args = [
            JSON.stringify(all),
            state.mounted,
            state.hover,
            state.press,
            state.pressIn,
            state.focus,
            delay,
            isPresent,
            onDidAnimate,
            presence == null ? void 0 : presence.exitVariant,
            presence == null ? void 0 : presence.enterVariant
          ];
          (0, import_core4.useIsomorphicLayoutEffect)(() => {
            for (const runner of runners) {
              runner();
            }
            Promise.all(completions).then(() => {
              onDidAnimate == null ? void 0 : onDidAnimate();
              if (isExiting) {
                sendExitComplete == null ? void 0 : sendExitComplete();
              }
            });
          }, args);
          return (0, import_react.useMemo)(() => {
            return {
              style: [nonAnimatedStyle, animatedStyle]
            };
          }, args);
        }
      };
    }
    __name(createAnimations2, "createAnimations");
    function getInterpolated(val, postfix, next) {
      const cur = val["_value"];
      const inputRange = [cur, next];
      const outputRange = [`${cur}deg`, `${next}deg`];
      if (next < cur) {
        inputRange.reverse();
        outputRange.reverse();
      }
      return val.interpolate({
        inputRange,
        outputRange
      });
    }
    __name(getInterpolated, "getInterpolated");
    function getAnimationConfig(key, animations2, animation) {
      if (typeof animation === "string") {
        return animations2[animation];
      }
      let type = "";
      let extraConf;
      if (Array.isArray(animation)) {
        type = animation[0];
        const conf = animation[1] && animation[1][key];
        if (conf) {
          if (typeof conf === "string") {
            type = conf;
          } else {
            type = conf.type || type;
            extraConf = conf;
          }
        }
      } else {
        const val = animation == null ? void 0 : animation[key];
        type = val == null ? void 0 : val.type;
        extraConf = val;
      }
      const found = animations2[type];
      if (!found) {
        throw new Error(`No animation of type "${type}" for key "${key}"`);
      }
      return {
        ...found,
        ...extraConf
      };
    }
    __name(getAnimationConfig, "getAnimationConfig");
  }
});

// ../../node_modules/@tamagui/animations-react-native/dist/cjs/index.js
var require_cjs46 = __commonJS({
  "../../node_modules/@tamagui/animations-react-native/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    var import_polyfill = require_polyfill();
    __reExport2(src_exports, require_createAnimations(), module2.exports);
  }
});

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default2
});
module.exports = __toCommonJS(tamagui_config_exports);

// ../../packages/config/tamagui.config.ts
var import_ui = __toESM(require_cjs42());
var import_font_inter = __toESM(require_cjs43());
var import_shorthands = __toESM(require_cjs44());

// ../../node_modules/@tamagui/theme-base/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  color: () => color,
  colorNames: () => colorNames,
  colorSchemes: () => colorSchemes,
  darkColors: () => darkColors,
  lightColors: () => lightColors,
  radius: () => radius,
  size: () => size,
  space: () => space,
  themes: () => themes,
  tokens: () => tokens,
  zIndex: () => zIndex
});

// ../../node_modules/@tamagui/theme-base/dist/esm/themes.js
var import_core3 = require("@tamagui/core-node");

// ../../node_modules/@tamagui/theme-base/dist/esm/colorUtils.js
var import_core = require("@tamagui/core-node");
var hexToRGBA = /* @__PURE__ */ __name((hex, alpha = 1) => {
  if (!isValidHex(hex)) {
    throw new Error("Invalid HEX");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r, g, b, a] = (hexArr == null ? void 0 : hexArr.map(convertHexUnitTo256)) ?? [];
  return `rgba(${r}, ${g}, ${b}, ${getAlphaFloat(a, alpha)})`;
}, "hexToRGBA");
var setColorAlpha = /* @__PURE__ */ __name((colorIn, alpha = 1) => {
  let color2 = `${(0, import_core.getVariableValue)(colorIn)}`;
  if (color2.startsWith("hsl(")) {
    return color2.replace("hsl", "hsla").replace(")", `, ${alpha})`);
  }
  if (color2.startsWith("#")) {
    return hexToRGBA(color2, alpha);
  }
  if (color2.startsWith("rgb(")) {
    return color2.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  }
  return color2;
}, "setColorAlpha");
var isValidHex = /* @__PURE__ */ __name((hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex), "isValidHex");
var getChunksFromString = /* @__PURE__ */ __name((st, chunkSize = 0) => st.match(new RegExp(`.{${chunkSize}}`, "g")), "getChunksFromString");
var convertHexUnitTo256 = /* @__PURE__ */ __name((hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16), "convertHexUnitTo256");
var getAlphaFloat = /* @__PURE__ */ __name((a, alpha = 1) => {
  if (a !== void 0) {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
}, "getAlphaFloat");

// ../../node_modules/@tamagui/theme-base/dist/esm/tokens.js
var import_colors = __toESM(require_cjs45());
var import_core2 = require("@tamagui/core-node");
var size = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 8,
  1: 20,
  1.5: 24,
  2: 28,
  2.5: 32,
  3: 36,
  3.5: 40,
  4: 44,
  true: 44,
  4.5: 48,
  5: 52,
  5.5: 59,
  6: 64,
  6.5: 69,
  7: 74,
  7.6: 79,
  8: 84,
  8.5: 89,
  9: 94,
  9.5: 99,
  10: 104,
  11: 124,
  12: 144,
  13: 164,
  14: 184,
  15: 204,
  16: 224,
  17: 224,
  18: 244,
  19: 264,
  20: 284
};
var spaces = Object.entries(size).map(([k, v]) => [
  k,
  Math.max(0, v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12))
]);
var spacesNegative = spaces.map(([k, v]) => [`-${k}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var colorTokens = {
  light: {
    blue: import_colors.blue,
    gray: import_colors.gray,
    green: import_colors.green,
    orange: import_colors.orange,
    pink: import_colors.pink,
    purple: import_colors.purple,
    red: import_colors.red,
    yellow: import_colors.yellow
  },
  dark: {
    blue: import_colors.blueDark,
    gray: import_colors.grayDark,
    green: import_colors.greenDark,
    orange: import_colors.orangeDark,
    pink: import_colors.pinkDark,
    purple: import_colors.purpleDark,
    red: import_colors.redDark,
    yellow: import_colors.yellowDark
  }
};
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v]));
}
__name(postfixObjKeys, "postfixObjKeys");
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = (0, import_core2.createTokens)({
  color,
  radius,
  zIndex,
  space,
  size
});

// ../../node_modules/@tamagui/theme-base/dist/esm/themes.js
var alternates = [1, 2, 3];
var alts = [1, 2];
function createThemesFrom(name, getTheme, props) {
  const { shift = 0 } = props;
  const theme = getTheme(0 + shift, props);
  let themeEntries = [[name, theme]];
  const altThemes = alternates.map((alt) => [
    `${name}_alt${alt}`,
    getTheme(alt * 1 + shift, props)
  ]);
  const altThemes2 = alternates.map((alt) => [
    `${name}_alt${alt}`,
    getTheme(alt + shift, props)
  ]);
  const altButtonThemes = alternates.map((_, i) => {
    const [bName, bTheme] = [altThemes2[i][0], (altThemes2[i + 1] || altThemes2[i])[1]];
    return [`${bName}_Button`, bTheme];
  });
  const darkerTheme = getTheme(Math.max(0, shift + (props.isLight ? 1 : -1)), props);
  const activeTheme = props.activeTheme || {
    ...theme,
    borderColor: props.backgrounds[7],
    background: props.backgrounds[6],
    backgroundHover: props.backgrounds[6],
    backgroundPress: props.backgrounds[6]
  };
  const inverted = altThemes.map(([_name, theme2]) => {
    return {
      ...theme2,
      background: theme2.color,
      backgroundHover: theme2.colorHover,
      backgroundFocus: theme2.colorFocus,
      backgroundPress: theme2.colorPress,
      color: theme2.background,
      colorHover: theme2.backgroundHover,
      colorFocus: theme2.backgroundFocus,
      colorPress: theme2.backgroundPress
    };
  });
  themeEntries = [
    ...themeEntries,
    ...altThemes.slice(0, alts.length),
    ...altButtonThemes.slice(0, alts.length),
    [`${name}_Button`, altThemes2[1][1]],
    [`${name}_DrawerFrame`, altThemes2[1][1]],
    [`${name}_SliderTrack`, altThemes[0][1]],
    [`${name}_SliderTrackActive`, altThemes[2][1]],
    [`${name}_SliderThumb`, inverted[2]],
    [`${name}_Progress`, altThemes[2][1]],
    [`${name}_ProgressIndicator`, inverted[2]],
    [`${name}_Switch`, altThemes[0][1]],
    [`${name}_SwitchThumb`, inverted[2]],
    [`${name}_TooltipArrow`, altThemes[1][1]],
    [`${name}_TooltipContent`, altThemes[1][1]],
    [`${name}_darker`, darkerTheme],
    [`${name}_active`, activeTheme]
  ];
  const themes2 = Object.fromEntries(themeEntries);
  return themes2;
}
__name(createThemesFrom, "createThemesFrom");
var themeCreator = /* @__PURE__ */ __name((str = 1, {
  backgrounds,
  isLight = true,
  isBase = false,
  colors = [...backgrounds].reverse(),
  borderColors = isLight ? colors : backgrounds,
  backgroundStrong,
  offsets: offsetsProp
}) => {
  const offsets = {
    borderColor: (offsetsProp == null ? void 0 : offsetsProp.borderColor) ?? (offsetsProp == null ? void 0 : offsetsProp.background) ?? [0, 0, 0, 0],
    background: (offsetsProp == null ? void 0 : offsetsProp.background) ?? [0, 0, 0, 0],
    color: (offsetsProp == null ? void 0 : offsetsProp.color) ?? [0, 0, 0, 0]
  };
  const darkColors2 = isLight ? colors : backgrounds;
  const lighterDir = isLight ? -1 : 1;
  const darkerDir = -lighterDir;
  const strongerDir = isLight ? darkerDir : lighterDir;
  const softerDir = -strongerDir;
  const get = /* @__PURE__ */ __name((arr, index, name = "background") => {
    return arr[Math.max(0, Math.min(index + (offsets[name][str] || 0), arr.length - 1))];
  }, "get");
  const colorTranslucent = setColorAlpha((0, import_core3.getVariableValue)(get(colors, 0 + str, "color")), 0.5);
  const theme = {
    background: get(backgrounds, str),
    backgroundStrong: backgroundStrong || get(backgrounds, str + strongerDir * 2),
    backgroundSoft: get(backgrounds, str + softerDir * 2),
    backgroundHover: get(backgrounds, str + lighterDir),
    backgroundPress: get(backgrounds, str + darkerDir),
    backgroundFocus: get(backgrounds, str + darkerDir * 2),
    backgroundTransparent: "hsla(0, 0%, 0%, 0.012)",
    color: get(colors, 0 + str, "color"),
    colorHover: get(colors, 1 + str, "color"),
    colorPress: get(colors, 2 + str, "color"),
    colorFocus: get(colors, 3 + str, "color"),
    colorTranslucent,
    colorMid: (isLight ? colors : backgrounds)[Math.floor(colors.length / 2)],
    shadowColor: isLight ? "hsla(0, 0%, 0%, 0.03)" : "hsla(0, 0%, 0%, 0.2)",
    shadowColorHover: darkColors2[!isLight ? 1 : 8],
    shadowColorPress: darkColors2[!isLight ? 1 : 8],
    shadowColorFocus: darkColors2[!isLight ? 1 : 8],
    borderColor: null,
    borderColorHover: null,
    borderColorPress: null,
    borderColorFocus: null,
    color1: backgrounds[0],
    color2: backgrounds[1],
    color3: backgrounds[2],
    color4: backgrounds[3],
    color5: backgrounds[4],
    color6: backgrounds[5],
    color7: backgrounds[6],
    color8: backgrounds[7],
    color9: backgrounds[8],
    color10: backgrounds[9],
    color11: backgrounds[10],
    color12: backgrounds[11]
  };
  if (isBase) {
    Object.assign(theme, {
      borderColor: isLight ? get(colors, 8 - str, "borderColor") : get(backgrounds, 2 + str, "borderColor"),
      borderColorHover: isLight ? get(colors, 6 - str, "borderColor") : get(backgrounds, 3 + str, "borderColor"),
      borderColorPress: isLight ? get(colors, 5 - str, "borderColor") : get(backgrounds, 1 + str, "borderColor"),
      borderColorFocus: isLight ? get(colors, 4 - str, "borderColor") : get(backgrounds, 3 + str, "borderColor")
    });
  } else {
    Object.assign(theme, {
      borderColor: get(borderColors, 1 + strongerDir, "borderColor"),
      borderColorHover: get(borderColors, 2 + strongerDir, "borderColor"),
      borderColorPress: get(borderColors, 3 + strongerDir, "borderColor"),
      borderColorFocus: get(borderColors, 4 + strongerDir, "borderColor")
    });
  }
  return theme;
}, "themeCreator");
var themeColors = {
  light: [
    "#fff",
    "#f4f4f4",
    "hsl(0, 0%, 99.0%)",
    "hsl(0, 0%, 97.3%)",
    "hsl(0, 0%, 95.1%)",
    "hsl(0, 0%, 93.0%)",
    "hsl(0, 0%, 90.9%)",
    "hsl(0, 0%, 88.7%)",
    "hsl(0, 0%, 85.8%)",
    "hsl(0, 0%, 78.0%)",
    "hsl(0, 0%, 56.1%)",
    "hsl(0, 0%, 52.3%)",
    "hsl(0, 0%, 43.5%)",
    "hsl(0, 0%, 9.0%)"
  ],
  dark: [
    "#111111",
    "#151515",
    "#191919",
    "#232323",
    "#282828",
    "#323232",
    "#383838",
    "#424242",
    "#494949",
    "#545454",
    "#626262",
    "#777777"
  ]
};
var lightThemes = createThemesFrom("light", themeCreator, {
  backgrounds: themeColors.light,
  backgroundStrong: import_core3.isWeb ? "#fefefe" : "#f2f2f2",
  borderColors: themeColors.light.slice(2),
  isLight: true,
  offsets: {
    background: [2, 2, 2, 2, 2, 2]
  }
});
var darkThemes = createThemesFrom("dark", themeCreator, {
  backgrounds: themeColors.dark,
  colors: themeColors.light.slice(2),
  backgroundStrong: "#070707",
  isBase: true,
  isLight: false,
  shift: 1,
  offsets: {
    color: [0, 4, 5, 5, 5, 5]
  }
});
darkThemes.dark_darker.background = "#030303";
darkThemes.dark_darker.backgroundStrong = "#000";
var light = (0, import_core3.createTheme)({
  ...lightColors,
  ...lightThemes.light
});
var dark = (0, import_core3.createTheme)({
  ...darkColors,
  ...darkThemes.dark
});
var baseThemes = {
  ...lightThemes,
  light,
  light_active: lightThemes.light,
  light_Card: lightThemes.light,
  light_SliderTrack: lightThemes.light_alt1,
  light_SliderTrackActive: lightThemes.light_alt2,
  light_Switch: lightThemes.light_alt2,
  light_SwitchThumb: lightThemes.light,
  light_DrawerFrame: lightThemes.light_alt1,
  ...darkThemes,
  dark,
  dark_active: darkThemes.dark,
  dark_Card: darkThemes.dark,
  dark_DrawerFrame: darkThemes.dark_alt1,
  dark_SliderTrack: darkThemes.dark_darker,
  dark_SliderTrackActive: darkThemes.dark_alt2,
  dark_Switch: darkThemes.dark_alt2,
  dark_SwitchThumb: darkThemes.dark_darker,
  dark_Button: darkThemes.dark_alt1
};
var darkEntries = Object.entries(dark);
var lightEntries = Object.entries(light);
function findColors(prefix, dark2 = false) {
  return Object.fromEntries(
    (dark2 ? darkEntries : lightEntries).filter(([k]) => k.startsWith(prefix))
  );
}
__name(findColors, "findColors");
var colorSchemes = [
  { name: "blue", colors: findColors("blue"), darkColors: findColors("blue", true) },
  { name: "gray", colors: findColors("gray"), darkColors: findColors("gray", true) },
  { name: "green", colors: findColors("green"), darkColors: findColors("green", true) },
  { name: "orange", colors: findColors("orange"), darkColors: findColors("orange", true) },
  { name: "pink", colors: findColors("pink"), darkColors: findColors("pink", true) },
  { name: "purple", colors: findColors("purple"), darkColors: findColors("purple", true) },
  { name: "red", colors: findColors("red"), darkColors: findColors("red", true) },
  { name: "yellow", colors: findColors("yellow"), darkColors: findColors("yellow", true) }
];
var colorNames = [
  "blue",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow",
  "gray"
];
var colorThemeEntries = colorSchemes.flatMap(({ name, colors, darkColors: darkColors2 }) => {
  const [altLightThemes, altDarkThemes] = [
    { colors: darkColors2, backgrounds: colors },
    { colors, backgrounds: darkColors2 }
  ].map((props, i) => {
    const isLight = i === 0;
    const colorsBase = Object.values(props.colors).slice(2);
    const [backgrounds, colors2] = [
      Object.values(props.backgrounds),
      isLight ? colorsBase : [colorsBase[0], "#ccc", ...colorsBase.slice(1)]
    ];
    const scheme = isLight ? "light" : "dark";
    const shift = isLight ? 0 : 1;
    const themeWithAlts = createThemesFrom(name, themeCreator, {
      colors: colors2,
      backgrounds,
      borderColors: backgrounds,
      isLight,
      shift,
      isBase: false,
      offsets: {
        background: isLight ? [2, 2, 2, 2, 2, 2] : null,
        borderColor: isLight ? [2, 2, 2, 3, 2] : null,
        color: isLight ? [0, 0, -1, -2, -3, -3, -4] : [-1, -1, -1, -1, -1, -1]
      }
    });
    return Object.entries(themeWithAlts).map(([k, v]) => [`${scheme}_${k}`, v]);
  });
  return [...altLightThemes, ...altDarkThemes];
});
var colorThemes = Object.fromEntries(colorThemeEntries);
baseThemes.dark_active = {
  ...colorThemes.dark_blue_alt2,
  background: darkColors.blue10,
  backgroundHover: darkColors.blue11,
  backgroundPress: darkColors.blue9,
  backgroundFocus: darkColors.blue9,
  color: darkColors.blue12,
  colorHover: darkColors.blue12,
  colorPress: darkColors.blue12,
  colorFocus: darkColors.blue12
};
baseThemes.light_active = baseThemes.dark_active;
var allThemes = {
  ...baseThemes,
  ...colorThemes
};
var themes = allThemes;

// ../../node_modules/@tamagui/theme-base/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs45()));

// ../../packages/config/animations.ts
var import_animations_react_native = __toESM(require_cjs46());
var animations = (0, import_animations_react_native.createAnimations)({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250
  }
});

// ../../packages/config/tamagui.config.ts
var headingFont = (0, import_font_inter.createInterFont)({
  size: {
    6: 15
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    6: "400",
    7: "700"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6
  },
  face: {
    700: { normal: "InterBold" }
  }
});
var bodyFont = (0, import_font_inter.createInterFont)(
  {
    face: {
      700: { normal: "InterBold" }
    }
  },
  {
    sizeSize: (size2) => Math.round(size2 * 1.1),
    sizeLineHeight: (size2) => Math.round(size2 * 1.1 + (size2 > 20 ? 10 : 10))
  }
);
var config = (0, import_ui.createTamagui)({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands: import_shorthands.shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont
  },
  themes,
  tokens,
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  }
});

// ../../packages/app/tamagui.config.ts
var tamagui_config_default = config;

// tamagui.config.ts
var tamagui_config_default2 = tamagui_config_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
