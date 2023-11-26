import React, { useEffect, useState } from 'react'
import Card from './Card';

const Display = () => {

  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [kan, setKan] = useState([]);
  const [tag, setTag] = useState([]);

  useEffect(() => {
    kanban();
  }, []);

  const kanban = async () => {
    const data = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const res = await data.json();
    setTitle(res.tickets[0].title);
    setId(res.tickets[0].id);
    setKan(res.tickets);
    setTag(res.tickets[0].tag)
    console.log(res);
    console.log(title);
  };

  return (
    <div className="container2">

        <div className="cols">
            <div className="icons">
                <p>Backlog</p>
                <p>+</p>
    </div>
            {kan.map((item, index)=>{
                return(<>{item.status==="Backlog"?<Card key={index} id={item.id} title={item.title} tag={tag}/>:null}
            </>)})}
        </div>
        <div className="cols">
          <div className='icons'>
            <p>ToDo</p>
            <p>+</p>
          </div>
            {kan.map((item, index)=>{
                return(<>{item.status==="Todo"?<Card key={index} id={item.id} title={item.title} tag={tag}/>:null}
            </>)})}
        </div>
        <div className="cols">
            <div className='icons'>
                <p>InProgress</p>
                <p>+</p>
            </div>
            {kan.map((item, index)=>{
                return(<>{item.status==="In progress"?<Card key={index} id={item.id} title={item.title} tag={tag}/>:null}
            </>)})}
        </div>
        <div className="cols">
            <div className='icons'>
                <p>Done</p>
                <p>+</p>
            </div>
            {kan.map((item, index)=>{
                return(<>{item.status==="Done"?<Card key={index} id={item.id} title={item.title} tag={tag}/>:null}
            </>)})}
        </div>
        <div className="cols">
            <p>Cancelled</p>
            <p></p>
            {kan.map((item, index)=>{
                return(<>{item.status==="Canceled"?<Card key={index} id={item.id} title={item.title} tag={tag}/>:null}
            </>)})}
        </div>
        <div></div>
    </div>
  )
}

export default Display