

// Array of objects
const quiz = [
    {
        q:'You enter a supermarket to buy your daily groceries, but spot a product that you really want. You have been saving for a long time now and have more than enough funds to afford this item. What do you do?',
        Options:['Buy the product, you have been saving for a long time and deserve a break','Keep saving and try getting over your urge for the product','Run out of the supermarket and never enter it again','Set aside a separate savings goal so that you can afford the product'],
        answer:3
    },
    {
        q:'You have been saving up for your dream car, which costs $75,000. When you enter the dealership, you see a cheaper, less enticing car for $40,000. This car has all the features you need. What would be the best move?',
        Options:['Buy the car you originally wanted','Buy the cheaper car','Pay for the original car in down-payments','I am unsure'],
        answer:1
    },
    {
        q:'Your mortgage payment is $1,600 per month. Which of the following repayment options would give you the biggest savings?',
        Options:['Paying $1,600 per month','Splitting your payment and paying $800 per fortnight','Moving to a cheaper house','I am unsure'],
        answer:1
    },
    {
        q:'If a credit-card offers an interest-free period of 55 days, does that generally mean that you don’t pay interest on any purchases until 55 days after you buy the item?',
        Options:['True','False','I am unsure',],
        answer:1
    },
    {
        q:'You are borrowing money to buy a car. You have the option of taking out a car loan with a balloon payment. What does this mean?',
        Options:['The repayments will be lower but you must pay a large deposit upfront','The repayments will be lower but you must pay a lump sum including interest in the end.','I am unsure',],
        answer:1
    },
    {
        q:'Buy now pay later services are often advertised as interest-free but they may charge fees. Which of the following can apply?',
        Options:['Establishment Fee','Payment processing fee','Late fee','All of the Above'],
        answer:3
    },
    {
        q:'Mary was three weeks late in making a payment on her credit card. Can the credit card provider mark it as late on her credit report?',
        Options:['No, because late payments are only recorded on mortgages','No, because she has caught up with all of the payments now','No, because it was less than 60 days late','Yes, because it was more than 14 days late'],
        answer:2
    },
    {
        q:'You invest $400 in a company. The brokerage fee is $10. How much would your investment fee have to increase for you to break even?',
        Options:['2.5%','6.5%','6%','7%'],
        answer:0
    },
    {
        q:'If an investment has done well over the past 6 months, is there a guarantee it will do well in the future?',
        Options:['No','Yes','I am unsure',],
        answer:0
    },
    {
        q:'The super guarantee is the minimum percentage of earnings an employer needs to pay into an employee’s super fund. How much is that currently in Australia?',
        Options:['11%','13%','5%','8%'],
        answer:0
    },
    {
        q:'The tax-free threshold in Australia is $18,200. What does this mean?',
        Options:['You pay a lower rate of tax on the first $18,200 of your income.','You pay no tax on the first $18,200 of your income.','I am unsure',],
        answer:1
    },
    {
        q:'You are shopping around for a new internet plan and notice one provider is offering 22% off the default price. That is the biggest discount you have seen advertised. Does this automatically make it the cheapest option?',
        Options:['Yes','No','I am unsure',],
        answer:1
    },
    {
        q:'It is the end of the month and you want to go out with your friends to an expensive restaurant. You also just received your salary. What do you do?',
        Options:['Save your money and don’t go out this time','Go to a cheaper restaurant','Get your richest friend to pay for the food','I am unsure'],
        answer:1
    },
    {
        q:'Bob and Sarah are considering their existing mortgage arrangements. How can they reduce the amount they pay over the life of the loan?',
        Options:['Switch from monthly to fortnightly payments ','Ask for a lower interest rate from their current lender','Look at switching to another lender','All of the Above'],
        answer:3
    },
    {
        q:'Carl recently received a large sum of money and wants to invest it, but he doesn’t know where to start. He should:',
        Options:['Put all his money into one asset - if the price goes up, he’s set for life.','Talk to his dad and follow his advice.','Work out how much risk he is happy to take on and find investments that suit his preferences.','Leave it in the bank and wait for interest to build up for the highest long-term returns.'],
        answer:2
    },
    {
        q:'Brodie is a bit tight on money and has gotten a phone call out of the blue from a bank offering her a personal loan. It’s a scam if:',
        Options:['There’s no credit check and you’re guaranteed approval on the spot','They ask for an up-front deposit or your bank details','The offer is ending soon and they pressure you to act now','All of the above'],
        answer:3
    },
    {
        q:'Which party can also offer free financial advice to the people?',
        Options:['Government','Banks','Counsellors',],
        answer:1
    },
    {
        q:'Gavin and Mary have signed a rental agreement together and they plan to establish a joint account to make payments. What should they consider ahead of opening a shared account?',
        Options:['Agree on the amount each person will contribute to the account','Agree on what the money will be used for','Make a plan in advance should one of them be unable to meet their financial responsibilities','All of the above'],
        answer:3
    },
    {
        q:'Sienna has just started her first job at a fast-food outlet at age 17. She is paid the award rate and works 15 to 20 hours per week. Will she be paid superannuation by her employer?',
        Options:['Sienna will be paid superannuation on top of her wage each week','Sienna won’t be paid superannuation because she does not work over 30 hours per week','Sienna’s super will be deducted from her wage by her employer because she is under 18','Sienna is a casual employee - Casual employees aren’t paid super'],
        answer:2
    },
    {
        q:'Your credit card bill identifies the minimum payment you need to make. If that is all you pay, what happens?',
        Options:['If you pay this amount you will have paid off your entire credit card bill.','If you pay the ‘minimum payment’, you won’t be charged interest on the amount that you have spent.','Paying only the ‘minimum payment’ reduces the length of time you’ll be in debt.','The ‘minimum payment’ is something you must pay as it is the smallest amount the bank requires you to pay by the due date each month.'],
        answer:3
    },
    {
        q:'You receive a significant bonus at work. What is the best strategy for managing it?',
        Options:['Splurge on something you have always wanted','Invest it all in the stock market for maximum returns','Save a portion, invest a portion, and treat yourself with the rest','Ignore it and continue as usual'],
        answer:2
    },
    {
        q:'You are considering investing in a company stock. What should you research before making a decision?',
        Options:[' The company logo and brand colors','The CEOs favorite hobbies','The company financial health, market trends, and future prospects','The company social media engagement'],
        answer:2
    },
    {
        q:'Your friend suggests investing in a cryptocurrency that is gaining popularity. What is your response?',
        Options:['Research the cryptocurrency thoroughly before making any decisions','Invest all your savings in it immediately',' Ignore the suggestion, cryptocurrencies are too risky',' Follow your friends advice blindly'],
        answer:0
    },
    {
        q:'You want to start saving for retirement. Which account type typically offers tax advantages?',
        Options:['Traditional IRA or Superannuation','Regular savings account','High-yield savings account',],
        answer:0
    },
    {
        q:'You receive a job offer with a higher salary but it requires relocating to a more expensive city. What factors should you consider before accepting?',
        Options:['Only the salary increase','Your emotional attachment to your current city','Cost of living in the new city, housing, transportation, and other expenses','None of the Above'],
        answer:2
    },
    {
        q:'You are considering purchasing a home. What is a crucial step in determining how much you can afford?',
        Options:['Checking your credit score','Saving up for a down payment','Asking your friends for advice','Calculating your debt-to-income ratio'],
        answer:3
    },
    {
        q:'You receive an unexpected medical bill that you cannot afford to pay in full. What is the best course of action?',
        Options:['Ignore the bill and hope it goes away','Pay the minimum amount due each month','Borrow money from friends or family','Contact the medical provider to negotiate a payment plan'],
        answer:3
    },
    {
        q:'You are offered a significant discount on a subscription service if you pay for the whole year upfront. What should you consider before committing?',
        Options:['The long-term savings compared to monthly payments','The convenience of paying upfront','Whether you will still want the service in a year','Whether you can cancel the subscription at any time'],
        answer:0
    },
    {
        q:'You have been diligently saving for a vacation, but your car breaks down unexpectedly. What is the best course of action?',
        Options:['Use your vacation savings to repair the car','Postpone the vacation and redirect your savings to cover the repair','Take out a loan to cover the car repair','Use your credit card to pay for the repair'],
        answer:1
    },
    {
        q:'You receive an inheritance from a relative. What is a wise way to use the money?',
        Options:['Pay off high-interest debt, save for emergencies, and invest for the future','Spend it all on luxury items','Invest it without any prior research','Donate it to charity without hesitation'],
        answer:2
    },
    {
        q:'You have been offered a promotion with a higher salary, but it requires longer hours and increased stress. What factors should you consider before accepting?',
        Options:['Only the salary increase','Work-life balance, job satisfaction, and career growth opportunities','The prestige associated with the new title','None of the Above'],
        answer:1
    },
    {
        q:'You are considering taking out a personal loan to consolidate your debts. What should you consider before making a decision?',
        Options:['The interest rate and fees associated with the loan','The convenience of having only one monthly payment','Whether you qualify for the loan based on your credit score','All of the Above'],
        answer:0
    },
    {
        q:'You are planning to buy a new smartphone, and you have the option to pay in full upfront or through monthly installments. Which option is generally more cost-effective?',
        Options:['Monthly installments with zero interest','Monthly installments with a low-interest rate',' It doesn not matter, both options cost the same','Paying in full upfront'],
        answer:3
    },
    {
        q:'You receive a bonus at work and are considering investing it in the stock market. What is a crucial step before making any investments?',
        Options:['Consulting with friends and family for advice','Investing in a company you are emotionally attached to','Diversifying your investment portfolio','Investing all of it in one high-risk stock for potential high returns'],
        answer:2
    },
    {
        q:'You are comparing two credit cards with different rewards programs. One offers cashback on all purchases, while the other offers travel rewards. How should you decide which one to choose?',
        Options:['Consider your spending habits and which rewards program aligns better with your needs','Choose the card with the most enticing travel rewards','Choose the card with the highest cashback rate','Choose the card with the fanciest design'],
        answer:0
    },
    {
        q:'You are considering refinancing your mortgage to take advantage of lower interest rates. What factors should you consider before refinancing?',
        Options:['The closing costs associated with refinancing','How long you plan to stay in your current home','Whether you will qualify for a lower interest rate','All of the Above'],
        answer:0
    },
    {
        q:'You receive a job offer with a lower salary but better benefits and work-life balance. How should you evaluate the offer compared to your current job?',
        Options:['Only consider the salary','Evaluate the overall compensation package, including benefits and work-life balance','Stick with your current job for job security','None of the Above'],
        answer:1
    },
    {
        q:'You are considering investing in real estate. What is a crucial factor to consider before purchasing a property?',
        Options:['The property location, potential for appreciation, and rental demand','The property color scheme and interior design','Whether the property has a swimming pool','Investing in the first property you come across'],
        answer:0
    },
    {
        q:'You are planning for retirement and considering opening an Individual Retirement Account (IRA). What is a benefit of opening a Self-Managed Superannuation Fund (SMSF) compared to a Traditional IRA?',
        Options:['Contributions to an SMSF are tax-deductible','Withdrawals from an SMSF are tax-free in retirement','There are no income limits for contributing to an SMSF','All of the Above'],
        answer:3
    },
    
]