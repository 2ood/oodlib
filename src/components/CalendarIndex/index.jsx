import React from 'react';
import styles from './styles.module.css';


function WeeklyCalendar(props) {
    
}

/*
following is a sample prop json of MontlyCalendar,

{  
    "name" : "January",
    "month" : 1,
    "content" : {
        "14" : {
            "route" : "2023-01-14",
            "desc" : "made something...",
        },
        "15" : {
            "route" : "2023-01-15",
            "desc" : "bla bla...",
        }
    }
}
*/

function MonthlyCalendar(props) {
    const data = props.data;
    const year = props.year;
    const week_1_offset = getWeek1StartDate(year,data.month);

    return (
    <div className={styles.montly_container}>
        <div className={styles.monthly_name}>{`${data.name}`}</div>
        {   
            //index is (week number-1) (week 1 has index 0)
            Array.from(Array(5).keys()).map(function(index){
                return <WeeklyCalendar start_date={week_1_offset+index*7} data={data.content}/>;
            })
        }
    </div>
    );
}

function getWeek1StartDate(year,month) {
    const date = new Date(year,month-1,1);
    const day_of_week = date.getDay();

    return (0-day_of_week);
}



/*
//following is the sample prop json of YearlyCalendar.

{
    "name" : "project-blog-log",
    "year" : 2023,
    "content" : [
        {  
            "name" : "January",
            "month" : 1,
            "content" : {
                "14" : {
                    "route" : "2023-01-14",
                    "desc" : "made something...",
                },
                "15" : {
                    "route" : "2023-01-15",
                    "desc" : "bla bla...",
                },
            },
        },
    ],
}
*/

function YearlyCalendar(props) {
    const data = props.data;

    return (
      <div className={styles.yearly_container}>
        <div className={styles.yearly_name}>{`${data.name} | ${data.year}`}</div>
        {
            data.content.map(function(monthlyJson){
                return <MonthlyCalendar year={data.year} data={monthlyJson}/>
            })
        }
      </div>
    );
  }

export {WeeklyCalendar, MonthlyCalendar, YearlyCalendar};