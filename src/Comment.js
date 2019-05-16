import React, {Component} from 'React'
class Comment extends Component {

render(){
  return(
    <div className="comment">
{this.props.commentText}
</div>
)
}

}


export default Comment
