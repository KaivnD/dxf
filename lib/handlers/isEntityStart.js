module.exports = function(value) {
  switch (value) {
    case 'ARC':
    case 'CIRCLE':
    case 'ELLIPSE':
    case 'HATCH':
    case 'LINE':
    case 'LWPOLYLINE':
    case 'SPLINE':
    case 'TEXT':
    case 'MTEXT':
    case 'DIMENSION':
      return true;
    default:
      return false;
  }
};