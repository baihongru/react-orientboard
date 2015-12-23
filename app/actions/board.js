import Reflux from 'reflux'

let boardActions = Reflux.createActions([
  'startDrag'
, 'stopDrag'
, 'startRotate'
, 'startResize'
, 'stopAll'
, 'setActiveBox'
, 'deactivateAll'
, 'addZIndex'
, 'init'
, 'getComponent'
, 'changeMode'
, 'setActiveBlock'
, 'removeBox'
, 'loadLayout'
, 'getLayout'
, 'newComponent'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default boardActions
