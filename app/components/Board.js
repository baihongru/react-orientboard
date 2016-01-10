import React from 'react'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import Block from './Block'

@autobind
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board
    }
  }

  render() {
    console.log('board', this.props.board)
    return (
      <div >
      {
        this.props.board
        ?
        this.props.board.blocks.map((block, i) => {
          return <Block
              boxes={block.boxes} w={block.w} h={block.h} key={i}
              ref={`box-${i}`}/>
        })
        :
        null
      }
      </div>
    )
  }

  toJson() {
    var keys = _.keys(this.refs).filter((key) => {
      return /^box-/.test(key)
    })
    var board = _.clone(this.props.board)
    delete board._id
    board.blocks = keys.map((key) => {
      return this.refs[key].toJson()
    })
    return board
  }
}

Board.propTypes = {

}

Board.defaultProps = {

}