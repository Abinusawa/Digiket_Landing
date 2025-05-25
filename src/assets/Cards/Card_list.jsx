import React from 'react'
import Feature_cards from './Feature_cards';

const Card_list = ({ features=[] }) => {
  return (
    <div className='Features_Cards container p-5 flex flex-wrap justify-center gap-4'>
 
      
    {
      features.map((user, i) => 
      {
        return (
        <Feature_cards 
        key={i} 
        id={features[i].id}
        icon={features[i].icon}
        title={features[i].title} 
        sub_title={features[i].sub_title}
        arrow_icon={features[i].arrow_icon}
        className={i === 0 ? 'bg-[#001720] text-white' : ''}
        highlightReadMore={i === 0}
        />
        );
      })
    }

    </div>
  )
}

export default Card_list



//parent of Card.js component or model for card
// import React from 'react';
// import Card from '../Card/Card';
// import DashboardCards from '../Card/DashboardCards';
// import LessonCards from '../Card/LessonCards';
// import ActivityCards from '../Card/ActivityCards'

// const CardList = ({ subCard=[], dashcard=[], lessonscard=[], activitycard=[] }) => {
// 	return (
// 		<div>
// 			{
// 				subCard.map((user, i) => 
// 				{
// 					return (
// 						<Card 
// 						key={i} 
// 						id={subCard[i].id} 
// 						subject={subCard[i].subject}
// 						ratingValue={subCard[i].ratingValue}
// 						number={subCard[i].number}
//                         students={subCard[i].students}
// 						/>
// 						);
// 				})
// 			}
// 			{
// 				dashcard.map((user, i) => 
// 				{
// 					return (
// 						<DashboardCards 
// 						key={i} 
// 						id={dashcard[i].id} 
// 						Title={dashcard[i].Title}
// 						img={dashcard[i].img}
// 						amount={dashcard[i].amount}
					
// 						/>
// 						);
// 				})
// 			}

// 			{
// 				lessonscard.map((user, i) => 
// 				{
// 					return (
// 						<LessonCards 
// 						key={i} 
// 						id={lessonscard[i].id} 
// 						Title={lessonscard[i].Title}
// 						dateimg={lessonscard[i].dateimg}
// 						timeimg={lessonscard[i].timeimg}
// 						time={lessonscard[i].time}
// 						date={lessonscard[i].date}
// 						info={lessonscard[i].info}			
// 						/>
// 						);
// 				})
// 			}

// {
// 				activitycard.map((user, i) => 
// 				{
// 					return (
// 						<ActivityCards 
// 						key={i} 
// 						id={activitycard[i].id} 
// 						Title={activitycard[i].Title}
// 						img={activitycard[i].img}
// 						time_stamp={activitycard[i].time_stamp}
								
// 						/>
// 						);
// 				})
// 			}
// 		</div>
// 	);
// }


