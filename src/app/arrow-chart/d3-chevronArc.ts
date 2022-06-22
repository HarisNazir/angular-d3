// https://d3js.org/d3-shape/ Version 1.0.4. Copyright 2016 Mike Bostock.

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("d3-path"))
    : typeof define === "function" && define.amd
    ? define(["exports", "d3-path"], factory)
    : factory((global.d3 = global.d3 || {}), global.d3);
})(this, function (exports, d3Path) {
  "use strict";

  var constant$1 = function (x) {
    return function constant() {
      return x;
    };
  };

  var epsilon = 1e-12;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var tau = 2 * pi;

  function chevronArcInnerRadius(d: any) {
    return d.innerRadius;
  }

  function chevronArcOuterRadius(d: any) {
    return d.outerRadius;
  }

  function chevronArcStartAngle(d: any) {
    return d.startAngle;
  }

  function chevronArcEndAngle(d: any) {
    return d.endAngle;
  }

  function asin(x: any) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
  }

  function intersect(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, x3: any, y3: any) {
    var x10 = x1 - x0,
      y10 = y1 - y0,
      x32 = x3 - x2,
      y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
    return [x0 + t * x10, y0 + t * y10];
  }

  // Compute perpendicular offset line of length rc.
  // http://mathworld.wolfram.com/Circle-LineIntersection.html
  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) (cx0 = cx1), (cy0 = cy1);

    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1),
    };
  }

  var chevronArc = function () {
    var innerRadius = chevronArcInnerRadius,
      outerRadius = chevronArcOuterRadius,
      cornerRadius = constant$1(0),
      startAngle = chevronArcStartAngle,
      endAngle = chevronArcEndAngle,
      (context: any) = null;

    function chevronArc() {
      var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = Math.abs(a1 - a0),
        cw = a1 > a0;

      if (!context) context = buffer = d3Path.path();

      // Ensure that the outer radius is always larger than the inner radius.
      if (r1 < r0) (r = r1), (r1 = r0), (r0 = r);
      // Or is it a circular or annular sector?
      else {
        var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          rc = Math.min(Math.abs(r1 - r0) / 2),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

        var x01 = r1 * Math.cos(a01),
          y01 = r1 * Math.sin(a01),
          x10 = r0 * Math.cos(a10),
          y10 = r0 * Math.sin(a10);

        var x11 = r1 * Math.cos(a11),
          y11 = r1 * Math.sin(a11),
          x00 = r0 * Math.cos(a00),
          y00 = r0 * Math.sin(a00);

        //////// Outer

        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // get tail coordinate (outer)
        var tailOuter = {};
        tailOuter.x = Math.cos(a0) * r1; // a0 = starting angle
        tailOuter.y = Math.sin(a0) * r1; // r1 = outer radius

        context.moveTo(tailOuter.x, tailOuter.y);
        context.arc(
          0,
          0,
          r1,
          Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11),
          Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11),
          !cw
        );

        ////////// Inner

        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // get tail coordinate (inner)
        var tailInner = {};
        tailInner.x = Math.cos(a0) * r0; // a0 = starting angle
        tailInner.y = Math.sin(a0) * r0; // r0 = inside radius

        context.arc(
          0,
          0,
          r0,
          Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11),
          Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11),
          cw
        );
        context.lineTo(tailInner.x, tailInner.y);

        ////////////// Done
      }

      context.closePath();

      if (buffer) return (context = null), buffer + "" || null;
    }

    chevronArc.centroid = function () {
      var r =
          (+innerRadius.apply(this, arguments) +
            +outerRadius.apply(this, arguments)) /
          2,
        a =
          (+startAngle.apply(this, arguments) +
            +endAngle.apply(this, arguments)) /
            2 -
          pi / 2;
      return [Math.cos(a) * r, Math.sin(a) * r];
    };

    chevronArc.innerRadius = function (_) {
      return arguments.length
        ? ((innerRadius = typeof _ === "function" ? _ : constant$1(+_)),
          chevronArc)
        : innerRadius;
    };

    chevronArc.outerRadius = function (_) {
      return arguments.length
        ? ((outerRadius = typeof _ === "function" ? _ : constant$1(+_)),
          chevronArc)
        : outerRadius;
    };

    chevronArc.startAngle = function (_) {
      return arguments.length
        ? ((startAngle = typeof _ === "function" ? _ : constant$1(+_)),
          chevronArc)
        : startAngle;
    };

    chevronArc.endAngle = function (_) {
      return arguments.length
        ? ((endAngle = typeof _ === "function" ? _ : constant$1(+_)),
          chevronArc)
        : endAngle;
    };

    chevronArc.context = function (_) {
      return arguments.length
        ? ((context = _ == null ? null : _), chevronArc)
        : context;
    };

    return chevronArc;
  };

  exports.chevronArc = chevronArc;

  Object.defineProperty(exports, "__esModule", { value: true });
});
