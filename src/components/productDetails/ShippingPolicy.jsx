import React from 'react'

const ShippingPolicy = ({selectedTab}) => {
  return (
    <div className={`${selectedTab !=="shipping policy" ? "hidden":""} py-9 `}>
      <div className='space-y-6'>
        <h1 className='text-black text-2xl font-bold'>Returns Policy</h1>
        <p className='text-muted text-sm'>Within 30 days of delivery, you can return the majority of new, unopened products for a complete refund. If the return is due to a mistake on our part (you received a damaged or inaccurate item, etc.), we will additionally cover the cost of return postage. <br /><br />

When you give your box to the return shipper, you should anticipate receiving your refund in four weeks, although in many circumstances, you will get your money back sooner. This time frame covers the following: the time it takes us to process your return once we receive it from the shipper (3 to 5 business days), the time it takes your bank to process our refund request (5 to 10 business days), and the transit time for us to get your return from the shipper (5 to 10 business days).
<br /><br />

To return an item, just sign in to your account, select the 'Complete Orders' link from the My Account menu, see the order, and then click the Return Item(s) button. Upon receipt and processing of the returned goods, we will send you an email to confirm your reimbursement.</p>

<hr />
      </div>


      <div className='space-y-6 mt-3'>
        <h1 className='text-black text-2xl font-bold'>Shipping  Policy</h1>
        <p className='text-muted text-sm'>Within 30 days of delivery, you can return the majority of new, unopened products for a complete refund. If the return is due to a mistake on our part (you received a damaged or inaccurate item, etc.), we will additionally cover the cost of return postage. <br /><br />

When you give your box to the return shipper, you should anticipate receiving your refund in four weeks, although in many circumstances, you will get your money back sooner. This time frame covers the following: the time it takes us to process your return once we receive it from the shipper (3 to 5 business days), the time it takes your bank to process our refund request (5 to 10 business days), and the transit time for us to get your return from the shipper (5 to 10 business days).
<br /><br />

To return an item, just sign in to your account, select the 'Complete Orders' link from the My Account menu, see the order, and then click the Return Item(s) button. Upon receipt and processing of the returned goods, we will send you an email to confirm your reimbursement.</p>

<hr />
      </div>

    </div>
  )
}

export default ShippingPolicy
