import './style.css'
import * as BABYLON from "babylonjs";

// 创建canvas
const canvas = document.createElement('canvas');

// 设置canvas的宽高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 添加body
document.body.appendChild(canvas);

// 创建引擎
const engine = new BABYLON.Engine(canvas, true);

// 创建场景
const scene = new BABYLON.Scene(engine);

// 创建相机
/**
  * name（可选）：相机的名称。
  * alpha：相机围绕目标点的水平旋转角度，默认为 Math.PI。
  * beta：相机围绕目标点的垂直旋转角度，默认为 0。
  * radius：相机与目标点之间的距离，默认为 1。
  * target：相机所注视的目标点的位置，默认为 BABYLON.Vector3.Zero()，即原点。
  * scene：相机所属的场景对象。
  * lowerAlphaLimit 和 upperAlphaLimit：相机水平旋转角度的限制范围。
  * lowerBetaLimit 和 upperBetaLimit：相机垂直旋转角度的限制范围。
  * lowerRadiusLimit 和 upperRadiusLimit：相机与目标点之间距离的限制范围。
  * wheelPrecision：鼠标滚轮控制缩放时的精度，默认为 3。
  * pinchPrecision：触摸手势控制缩放时的精度，默认为 2。
  * allowUpsideDown：是否允许相机完全倒置，默认为 true。
*/
const camera = new BABYLON.ArcRotateCamera(
  "camera",
  0,
  0,
  10,
  BABYLON.Vector3.Zero(),
  scene
);

// 把相机附加到画布上 
camera.attachControl(canvas)

// 创建球
const sphere = BABYLON.MeshBuilder.CreateSphere(
  'sphere',// 球的名称
  { diameter: 2 },// 球的直径
  scene,// 球所在场景
)

// 创建光源
const light = new BABYLON.DirectionalLight(
  'light',
  new BABYLON.Vector3(0, -1, 0),
  scene
)

// 创建地面
const ground = BABYLON.MeshBuilder.CreateGround(
  'ground',
  { width: 6, height: 6 },
  scene
)

// 渲染场景
engine.runRenderLoop(() => {
  scene.render();
})

window.addEventListener('resize', () => {
  engine.resize();
})