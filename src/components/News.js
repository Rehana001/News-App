import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps={
        country:'us',
        pageSize:8,
        category: 'general',
    }

    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string,
    }

    articles= [
        {
            "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Israel’s war on Gaza: List of key events, day 93",
            "description": "Six people have been killed in an Israeli air raid on Jenin in the occupied West Bank, Palestinian Health Ministry says.",
            "url": "https://www.aljazeera.com/news/2024/1/7/israels-war-on-gaza-list-of-key-events-day-92-3",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/AP24003600918916-1704519872.jpg?resize=1920%2C1440",
            "publishedAt": "2024-01-07T09:30:54Z",
            "content": "Heres how things stand on Saturday, January 7, 2024:\r\n An Israeli air attack killed at least six people in Jenin in the occupied West Bank, the Palestinian Ministry of Health said, with witnesses say… [+2056 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Melissa Rudy",
            "title": "Fight cold and flu with these 10 immune-boosting recipes from a Texas registered dietitian",
            "description": "One way to combat seasonal illness is to consume nutrients and proteins that help improve immune health, according to Amy Goodson, a registered dietitian in Dallas-Fort Worth.",
            "url": "https://www.foxnews.com/health/fight-cold-flu-immune-boosting-recipes-texas-registered-dietitian",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/woman-eating-salad.jpg",
            "publishedAt": "2024-01-07T09:00:24Z",
            "content": "With flu season in full swing and other seasonal respiratory infections\r\n also spiking across the U.S. experts say its important to keep your immune system strong and healthy during this time of year… [+7960 chars]"
            },
            {
            "source": {
            "id": "msnbc",
            "name": "MSNBC"
            },
            "author": "Shevrin Jones",
            "title": "Ron DeSantis is willing to sacrifice Floridians' lives by allowing Surgeon General Joseph Ladapo to blast COVID boosters",
            "description": "The Florida Health Department published a bulletin from state Surgeon General Joseph Ladapo calling for a halt in the distribution and use of mRNA Covid boosters.",
            "url": "https://www.msnbc.com/opinion/msnbc-opinion/ron-desantis-joseph-ladapo-pause-covid-boosters-rcna132193",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-02/220224-Joseph-Ladapo-al-0812-9a80d4.jpg",
            "publishedAt": "2024-01-05T19:13:39Z",
            "content": "On Wednesday, the Florida Health Department published an official bulletin from state Surgeon General Joseph Ladapocalling for a halt in the distribution and use of mRNA Covid boosters despite the br… [+3877 chars]"
            },
            {
            "source": {
            "id": "medical-news-today",
            "name": "Medical News Today"
            },
            "author": "Corrie Pelc",
            "title": "How much should you exercise for a longer, healthier life? Study offers clues",
            "description": "A new study found that while exercise is important to living a long life, following other healthy lifestyle habits may have an even greater impact.",
            "url": "https://www.medicalnewstoday.com/articles/how-much-exercise-for-longevity-healthier-life",
            "urlToImage": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/12/exercise_life_GettyImages1124488253_Thumb.jpg",
            "publishedAt": "2023-12-17T05:00:00Z",
            "content": "<ul><li>There are many factors when it comes to living a long and healthy life. </li><li>Some of these factors cannot be changed, while many others are modifiable.</li><li>A new study from researcher… [+6986 chars]"
            },
            {
            "source": {
            "id": "recode",
            "name": "Recode"
            },
            "author": "A.W. Ohlheiser",
            "title": "What to know about ChatGPT, AI therapy, and mental health",
            "description": "Getting AI to improve mental health outcomes is not as simple as firing up ChatGPT.",
            "url": "https://www.vox.com/technology/2023/12/14/24000435/chatbot-therapy-risks-and-potential",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/j26j3kxGpwJSsKmT4YgeKWveF2A=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25161217/GettyImages_1449586591.png",
            "publishedAt": "2023-12-14T14:45:00Z",
            "content": "I didnt find a therapist when I first felt I might need one, nor when I finally found the energy to start Googling the therapists with offices near me. I didnt find one months later when, after glanc… [+9358 chars]"
            },
            {
            "source": {
            "id": "the-irish-times",
            "name": "The Irish Times"
            },
            "author": "Jennifer Bray",
            "title": "Abortion rules should be relaxed, review to recommend",
            "description": "Minister for Health Stephen Donnelly considering report by barrister Marie O’Shea which examined operation of the existing law",
            "url": "https://www.irishtimes.com/ireland/social-affairs/2023/03/29/review-calls-for-abortion-law-to-be-relaxed/",
            "urlToImage": "https://www.irishtimes.com/resizer/DycgF-s39PfaIVo4cOhhhNhDjqM=/1200x630/filters:format(jpg):quality(70):focal(1109x649:1119x659)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YVVSZCLNN6CW4NWJKGEPUSEAPE.jpg",
            "publishedAt": "2023-03-29T04:15:00Z",
            "content": "A new review of the States abortion law is set to recommend a loosening of existing rules which could involve the removal of the three-day wait to access medication.\r\nMinister for Health Stephen Donn… [+2934 chars]"
            },
            {
            "source": {
            "id": "the-globe-and-mail",
            "name": "The Globe And Mail"
            },
            "author": "Wency Leung",
            "title": "‘COVID hasn’t gone away’: Five things health experts say we must do to end the pandemic",
            "description": "Boosting health care capacity, encouraging third doses and better understanding long COVID are among the issues health experts say need to be addressed",
            "url": "https://www.theglobeandmail.com/canada/article-covid-19-pandemic-not-over/",
            "urlToImage": "https://www.theglobeandmail.com/resizer/nYUYq7AN4xv1_6tgavE1CKi6OvQ=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/OSOQKLUMCZEDDPFOKUWLUFOLFY.png",
            "publishedAt": "2022-06-15T17:00:00Z",
            "content": "Restaurants are open. Festivals are back. Masks, for the most part, are optional. And starting Monday, June 20, proof of vaccination will no longer be required of Canadian air and train passengers.\r\n… [+7848 chars]"
            },
            {
            "source": {
            "id": "rte",
            "name": "RTE"
            },
            "author": "Will Goodbody",
            "title": "Efforts continue to assess extent of ransomware issue",
            "description": "Efforts will continue today to assess the impact of the ransomware attack on the Health Service Executive, healthcare facilities and services here.",
            "url": "https://www.rte.ie/news/coronavirus/2021/0515/1221735-hse-cyber-atack/",
            "urlToImage": "https://img.rasset.ie/0016bdc3-1600.jpg",
            "publishedAt": "2021-05-15T06:18:56Z",
            "content": "Efforts will continue today to assess the impact of the ransomware attack on the Health Service Executive, healthcare facilities and services.\r\nThe HSE has said it will take a number of days before i… [+1264 chars]"
            }
        ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1,
        }
    }

    async componentDidMount(){
        console.log("cdm")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=28bb9c5579e5481a952bff65adc23c35&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }

    handlePrevClick= async ()=>{
        console.log("Previous");

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=28bb9c5579e5481a952bff65adc23c35&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })

    }
    handleNextClick= async ()=>{
        console.log("Next");
        if(!(Math.ceil(this.state.page+1>this.state.totalResults/this.props.pageSize))){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=28bb9c5579e5481a952bff65adc23c35&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data= await fetch(url);
            let parsedData= await data.json();
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles,
                totalResults:parsedData.totalResults,
                loading:false
            })
        }
    }

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin:"40px 0px"}}>News Monkey - Top Headlines</h1>
       {this.state.loading && <Spinner/>}
       <div className='row'>
       {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4'>
            <NewsItem key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
       })}
            
       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button disabled={(Math.ceil(this.state.page+1>this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}

export default News
