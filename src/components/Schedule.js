import React from "react";
import ClassButton from "./ClassButton";
import "../styles/Schedule.css";


function BoldText({children}) {
  return <span style={{fontWeight: 'bold'}}>{children}</span>;
}

const Schedule = () => {
  return (
    <div>
      <div id = "classes">
        <ClassButton classText = "Instructional Yoga , with Lisa McArthur - 9:00am-10:30am CDT" />
        <ClassButton classText = "Knitting 101 , with Daniel Johnson - 12:00pm-12:30pm CDT" />
        <ClassButton classText = "Fun &#38; Games , with James Adams - 9:00am-10:30am CDT" />
        <ClassButton classText = "Mind Puzzles , with Arthur Sparrow - 7:00pm-8:30pm CDT" />
      </div>
    </div>
  )

}

export default Schedule;