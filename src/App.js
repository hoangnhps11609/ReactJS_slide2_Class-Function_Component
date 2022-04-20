
import './App.css';
import Comment from './components/Comment';
import FComment from './components/FComment';


const comments = [
  {id: 1, author: 'Hoang1', content:'Hoang 1', timeAgo: '1'},
  {id: 2, author: 'Hoang2', content:'Hoang 2', timeAgo: '2'},
  {id: 3, author: 'Hoang3', content:'Hoang 3', timeAgo: '3'},
  {id: 4, author: 'Hoang4', content:'Hoang 4', timeAgo: '4'},
]

function App() {
const contents = comments.map(item => {
  return (
    <FComment key={item.id} author={item.author} content={item.content} timeAgo={item.timeAgo}></FComment> 
  )
})

  return (
    <div className="comments container ui">
        <h3>Function Conponent</h3>
        {contents}
        <hr />
        <h3>Class Conponent</h3>
        {
          comments.length <=0 ? <p>No Comments</p> :
          comments.map(item =>(
              <Comment key={item.id} author={item.author} content={item.content} timeAgo={item.timeAgo}></Comment> 
            )
          )
        }

        <hr />
        {comments.length > 0 && <h3>Total comments: {comments.length}</h3>}
    </div>
  );
}

export default App;
