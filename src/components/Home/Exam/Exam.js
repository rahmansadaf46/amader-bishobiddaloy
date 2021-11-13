import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { getDatabaseCart } from '../../../utilities/databaseManager';
const Exam = () => {
    const [cart, setCart] = useState([]);
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [itemData])
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/questions')
        .then(res => res.json())
        .then(data => {
            setQuestion(data);
           
         
        })
        // const items = fakeData.slice(0, 6);

    }, []);
    // console.log(question)
    const handleChange = (ques,ans) =>{
        const findQues = question.filter(question=>question.data.question === ques)
        // console.log(findQues)
        let data = {}
        if(findQues[0].data.rightAnswer === ans){
            data.question = ques;
            data.answer = 'Right'
        }
        else if(findQues[0].data.rightAnswer !== ans){
            data.question = ques;
            data.answer = 'Wrong'  
        }
    //    console.log(sameQues)
       if(answer.find(ans=>ans.question===ques)===undefined){
        const previousAnswer = [...answer,data]
        setAnswer(previousAnswer)
       }
       else{
          let newAns =  answer.filter(ans=>ans.question!==ques)
           const previousAnswer = [...newAns,data]
           setAnswer(previousAnswer)
       }
        
      
       
      
    }

    const handleSubmit = () => {
        console.log(answer)
        const result = answer.filter(ans=> ans.answer === 'Right')
        alert(`Your result is ${result.length}/${question.length}`)
        window.location.assign('/')
    }
    return (
        <div>
        <Header cart={cart.length}></Header>
        <div style={{marginTop:'100px',marginBottom:'100px'}} className="container py-5 d-flex justify-content-center">
        <div style={{}} className="text-center">
       
            {
               question?.map((question,index) =>
                <form action="#" method="post" style={{fontSize: '20px',border:'1px solid white',padding:'40px',width:'100%',borderRadius:'50px',boxShadow:'5px 5px 20px gray',marginBottom:'50px'}}>
               <fieldset >
                {/* <legend>Give your feedback</legend> */}
                <p className="font-weight-bold">Ques no : {index +1} <br /> <span className="text-primary">{question.data.question}</span></p>
                {
                    question?.data?.answer.map(answer =><><input  onClick={()=>handleChange(question.data.question,answer)} type="radio" name="answer" />{answer}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>)
                }


              </fieldset>    </form>) 
                 
            }
        <br />
       
  
      {/* <input type="Submit" defaultValue="Proceed" /> */}
            <button onClick={()=>handleSubmit()} className="btn btn-primary font-weight-bold">Submit</button>
        </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Exam;