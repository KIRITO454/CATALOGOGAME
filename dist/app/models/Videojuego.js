function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
// models/Videojuego.js (actualizado)
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany, JoinTable } from "typeorm";
import Reseña from "./Reseña.js";
import Genero from "./Genero.js";
import Plataforma from "./Plataforma.js";
var Videojuego = (_dec = Entity("videojuego"), _dec2 = PrimaryGeneratedColumn(), _dec3 = Column({
  type: "varchar",
  length: 100
}), _dec4 = Column({
  type: "varchar",
  length: 250
}), _dec5 = Column({
  type: "varchar",
  length: 50,
  nullable: true
}), _dec6 = Column({
  type: "date",
  nullable: true
}), _dec7 = Column({
  type: "text",
  nullable: true
}), _dec8 = Column({
  type: "decimal",
  precision: 10,
  scale: 2,
  nullable: true
}), _dec9 = OneToMany(function () {
  return Reseña;
}, function (reseña) {
  return reseña.videojuego;
}), _dec10 = ManyToMany(function () {
  return Plataforma;
}, function (plataforma) {
  return plataforma.videojuegos;
}), _dec11 = JoinTable({
  name: 'videojuegos_plataformas',
  joinColumn: {
    name: 'videojuegoId',
    referencedColumnName: 'id'
  },
  inverseJoinColumn: {
    name: 'plataformaId',
    referencedColumnName: 'id'
  }
}), _dec12 = ManyToMany(function () {
  return Genero;
}, function (genero) {
  return genero.videojuegos;
}), _dec13 = JoinTable({
  name: 'videojuegos_generos',
  // nombre de la tabla intermedia
  joinColumn: {
    name: 'videojuegoId',
    referencedColumnName: 'id'
  },
  inverseJoinColumn: {
    name: 'generoId',
    referencedColumnName: 'id'
  }
}), _dec(_class = (_class2 = /*#__PURE__*/_createClass(function Videojuego() {
  _classCallCheck(this, Videojuego);
  _initializerDefineProperty(this, "id", _descriptor, this);
  _initializerDefineProperty(this, "nombre", _descriptor2, this);
  _initializerDefineProperty(this, "imagen", _descriptor3, this);
  _initializerDefineProperty(this, "genero", _descriptor4, this);
  _initializerDefineProperty(this, "fecha_lanzamiento", _descriptor5, this);
  _initializerDefineProperty(this, "sinopsis", _descriptor6, this);
  _initializerDefineProperty(this, "precio", _descriptor7, this);
  _initializerDefineProperty(this, "rese\xF1as", _descriptor8, this);
  _initializerDefineProperty(this, "plataformas", _descriptor9, this);
  _initializerDefineProperty(this, "generos", _descriptor10, this);
}), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nombre", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imagen", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "genero", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fecha_lanzamiento", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sinopsis", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "precio", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rese\xF1as", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "plataformas", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "generos", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);
export default Videojuego;