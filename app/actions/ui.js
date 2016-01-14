import Reflux from 'reflux'

let actions = Reflux.createActions([
  'openBlockConfig',
  'closeBlockConfig',
  'openBoardConfig',
  'closeBoardConfig',
  'setMode',
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default actions
