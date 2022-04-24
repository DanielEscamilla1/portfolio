import React from 'react'
import "./Aboutme.css"
import AboutMe from "../../img/Me.jpg"
import Award from "../../img/award.png"

const Aboutme = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutMe} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto fuga ipsum neque, quos quam mollitia necessitatibus!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, provident sunt totam repellat, veniam tempore sed deleniti enim eligendi inventore excepturi consequuntur velit eum ipsam laborum sint optio numquam nostrum?
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award" />
          <div className="a-award-text">
            <h4 className="a-award-title">Best Award 2020</h4>
            <p className="a-award-desc">
              I am the greatest full stack web developerto ever touch code.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme