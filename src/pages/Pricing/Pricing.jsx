import React from 'react'
import Style from './Pricing.module.css'

export function Pricing() {

  return (
    <div className={Style.container}>
   
      <div className={Style.card1}>
        <span > Day Pass </span> <br />
        <span className=''> $  </span>  <br /> <span> 20 </span>   <br />
        <span> /pass </span> <br />
        ☑ 1 Day Pass <br />
        ☑ Free Gym Access <br />
        ☑ 24 Hours Access <br />
        <button> Get Started </button>
      </div>

      <div className={Style.card2}>
        <span> Month to Month </span>  <br />
        <span className=''> $  </span>  <br /><span> 90 </span>   <br />
        <span> /month </span> <br />
        ☑ $99 Joining Free  <br />
        ☑ No Contact  <br />
        ☑ Free Gym Access   <br />
        ☑ 1 Group Class Include  <br />
        ☑ 24 Hours Access <br />
        <button> Get Started </button>
      </div>

      <div className={Style.content}>

        <span>Membership</span> <br />

        <span>From Punch Pass to Monthly or Annual </span> <br />

        <p>At Gym base we offer wide range of membership with opposite to suit every budget.
          Everything from one Day Pass. Punch Pass to monthly or annual prepaid membership. 
          What's more. We won't tie you in to a long term contract giving you greater flexibility. <br />

          <span>Each Plan included </span> <br />

          ➡ Best equiement global brands. <br />
          ➡ The gym opens 24 hours a day , 7 days a week . <br />
          ➡ Two safe payment methods. <br />
          ➡ Group fitness classes in price of subscription. <br />
          ➡ No long-term contract , period.
        </p>
      </div>

    </div>
  )
}