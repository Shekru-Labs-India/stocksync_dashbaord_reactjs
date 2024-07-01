import React from 'react'
import user from "../assets/assets/img/ic_glass_users.png"
import user2 from "../assets/assets/img/ic_glass_message.png"
import user3 from "../assets/assets/img/ic_glass_buy.png"
const Reviews = () => {
  return (
    <div>
        {/* <!-- Fun facts: Start --> */}
    <section id="landingFunFacts" class="section-py landing-fun-facts py-12 my-4 bg-white">
      <div class="container">
        <div class="row gx-0 gy-5 gx-sm-6">
          
          <div class="col-xl-4 col-lg-6">
            <div class="card shadow-md justify-content-center text-center align-item-center" style={{borderRadius: "20px"}}>

              <div class="card-body">
                <img src={user} alt="user image" class="my-3 "/>
                <h3 class="fw-bold mb-0 fun-facts-text mb-2">149+</h3>
                <h6 class="mb-0 text-body">Users</h6>

              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="card shadow-md justify-content-center text-center align-item-center" style={{borderRadius: "20px"}}>

              <div class="card-body">
                <img src={user2} alt="user image" class="my-3 "/>
                <h3 class="fw-bold mb-0 fun-facts-text mb-2">1315+</h3>
                <h6 class="mb-0 text-body">Demat Accounts</h6>

              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="card shadow-md justify-content-center text-center align-item-center" style={{borderRadius: "20px"}}>

              <div class="card-body">
                <img src={user3} alt="user image" class="my-3 "/>
                <h3 class="fw-bold mb-0 fun-facts-text mb-2">1749+</h3>
                <h6 class="mb-0 text-body">Order Placed</h6>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    {/* <!-- Fun facts: End --> */}








    <section id="landingPricing" class="section-py bg-body landing-pricing">
      <div class="container bg-icon-left position-relative">
        <h2 class="h2">Best Platform for Copy Trading in India</h2>
        <p>Copy trading, an advanced version of social trading, enables you to replicate the trades of one trading account into other accounts effortlessly. With copy trading, you can receive automated signals from experienced signal providers and mirror their trades in your trading or demat account, even when you're away from your system.</p>

        <p>When selecting a copy trading platform, it's crucial to consider your specific requirements. Several copy trading companies in India offer copy trading software and tools, but the best platform is the one that meets your needs effectively.</p>

        <h3 class="h3 mt-3">Key Features of an Ideal Copy Trading Platform</h3>
        <strong class="text-bold">Fast Order Execution:</strong> Look for a platform that ensures swift execution of copied trades, minimizing delays and slippage. <br />
        <strong class="text-bold">Low Charges:</strong> Opt for a copy trading platform with competitive pricing to maximize your returns. Consider the costs associated with using the copy trading software.<br />
        <strong class="text-bold">Copy Trading Tools:</strong> A reliable platform should provide you with a comprehensive set of copy trading tools, enhancing your trading experience and increasing your chances of success.<br />
        <strong class="text-bold">Better Customer Support:</strong> Prioritize platforms that offer excellent customer support, readily available to assist you with any queries or issues that may arise during your copy trading journey.<br />
        <strong class="text-bold">Safe and Secure:</strong> Security is of utmost importance when selecting a copy trading platform. Ensure the platform implements robust security measures to protect your personal and financial information.<br />
        <strong class="text-bold">Reliable:</strong> Choose a reputable and trustworthy copy trading platform that has a proven track record in the industry, with positive reviews and testimonials from users.
        
        <p class="mt-2">One such exemplary copy trading platform is QuantBot. QuantBot offers a host of benefits, making it an ideal choice for copy trading enthusiasts. With QuantBot, you can enjoy fast order execution, ensuring that you don't miss out on lucrative trades. The platform also features competitive charges, enabling you to maximize your profits. Additionally, QuantBot provides an array of powerful copy trading tools to enhance your trading strategies. Their dedicated customer support team is available to assist you whenever you need guidance or encounter any issues. Rest assured, QuantBot prioritizes the safety and security of your personal and financial information, creating a reliable environment for copy trading.</p>

        <p>If you're searching for the best platform for copy trading in India, you're in the right place. QuantBot offers the necessary features and benefits to help you replicate trades from expert traders seamlessly. Begin your copy trading journey with confidence and increase your chances of success.</p>

        <h1 class="h2 mt-3">Copy Trading in the Indian Stock Market</h1>
        
        <p>Copy Trading is an innovative approach that allows you to replicate the trades of experienced traders in the Indian stock market directly into your demat accounts using APIs. By using copy trading in Indian stocks, you can automate your trading by copying the trades of other traders. This tactic, known as copying, connects a portion of your portfolio with the portfolios of master traders, ensuring that every trade and transaction is mirrored.</p>

        <p>To get started, you simply open a personal account and connect it with a master trader or any trader whom you trust. From that point on, every action taken by the master trader will be automatically replicated in your personal account.</p>

        <p>Copy trading in Indian stocks enables you to receive automated signals from signal providers and copy them into your account, even when you are busy or unavailable. Every trading strategy and action, such as opening positions, setting stop losses, closing positions, and taking profit orders, will be executed automatically in your copying account.</p>

        <p>This technique is particularly beneficial for newcomers or traders who lack confidence in placing trades in the stock market. It serves as an excellent way to learn how to trade in the share market by observing the actions of expert traders. With the help of copy trading, you can enhance your trading experience. This feature can be used in various markets, including stocks, forex, and more. Copy trading in the NSE (National Stock Exchange) is often regarded as an advanced version of social trading.</p>

        <h3 class="mt-3 h3">How Does Copy Trading Work in NSE, BSE & MCX?</h3>
        <p>Copy trading in the Indian stock market involves two types of accounts: a master account and child accounts. The master account makes trading decisions, while the child accounts replicate those decisions automatically. Both accounts must be on a copy trading platform that provides copying services.</p>

        <p>You can choose your strategy manager, and the same trading signals and actions will be copied from the master account to the child accounts. If you are an expert trader and want to send the same trading signals to multiple demat accounts, copy trading in the stock market allows you to execute the same transactions in numerous accounts.</p>

        <p>NSE copy trading, along with copy trading in BSE and MCX, is a form of social trading that enables investors to automatically replicate the trades of successful traders in the Indian stock market. By participating in copy trading, investors have the opportunity to potentially earn profits by mirroring the market movements in these exchanges.</p>

      </div>
    </section>
    </div>
  )
}

export default Reviews
