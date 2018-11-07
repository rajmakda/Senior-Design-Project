import './App.css';
import React from "react"

class App extends React.Component {
  state = {
    formValues: {},
    green1: true,    green2: true,    green3: true,    green4: true,    green5: true,
    green6: true,    green7: true,    green8: true,    green9: true,    green10: true,
    green11: true,    green12: true,    green13: true,    green14: true,    green15: true,
    green16: true,    green17: true,    green18: true,    green19: true,    green20: true,
    green21: true,    green22: true,    green23: true,    green24: true,    green25: true,   green26: true,  green27: true,
    green28: true,    green29: true,    green30: true,    green31: true,    green32: true,   green33: true,  green34: true,
    checked1: false,    checked2: false,    checked3: false,    checked4: false,    checked5: false,
    checked6: false,    checked7: false,    checked8: false,    checked9: false,    checked10: false,
    checked11: false,    checked12: false,    checked13: false,    checked14: false,    checked15: false,
    checked16: false,    checked17: false,    checked18: false,    checked19: false,    checked20: false,
    checked21: false,    checked22: false,    checked23: false,    checked24: false,    checked25: false, checked26: false,  checked27: false,
    checked28: false,    checked29: false,    checked30: false,    checked31: false,    checked32: false, checked33: false,  checked34: false,
 }

handleChange = (e) => {
  e.preventDefault();

    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;
    formValues[name] = value;
    this.setState({formValues})
  }

  handleChangetiming1a = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green1: !this.state.green1});
        this.setState(state => ({ checked1: !state.checked1 }));
        if((this.state.checked1)==false)
        {
          formValues[name] = "10:00 AM - 12:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked1)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

  handleChangetiming1b = (e) => {
    e.preventDefault();
    let formValues = this.state.formValues;
   let name = e.target.name;
   let value = e.target.value;
     this.setState({green2: !this.state.green2});
     this.setState(state => ({ checked2: !state.checked2 }));
     if((this.state.checked2)==false)
     {
       formValues[name] = "10:00 AM - 12:00 PM";
       this.setState({formValues});
     }
     else if((this.state.checked2)==true)
     {
       formValues[name]="";
       this.setState({formValues});
     }
  }

  handleChangetiming1c = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green3: !this.state.green3});
        this.setState(state => ({ checked3: !state.checked3 }));
        if((this.state.checked3)==false)
        {
          formValues[name] = "10:00 AM - 12:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked3)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

   handleChangetiming1d = (e) => {
        e.preventDefault();
           let formValues = this.state.formValues;
          let name = e.target.name;
          let value = e.target.value;
            this.setState({green4: !this.state.green4});
            this.setState(state => ({ checked4: !state.checked4 }));
            if((this.state.checked4)==false)
            {
              formValues[name] = "10:00 AM - 12:00 PM";
              this.setState({formValues});
            }
            else if((this.state.checked4)==true)
            {
              formValues[name]="";
              this.setState({formValues});
            }
      }

        handleChangetiming1e = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green5: !this.state.green5});
        this.setState(state => ({ checked5: !state.checked5 }));
        if((this.state.checked5)==false)
        {
          formValues[name] = "10:00 AM - 12:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked5)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

    handleChangetiming2a = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green6: !this.state.green6});
        this.setState(state => ({ checked6: !state.checked6}));
        if((this.state.checked6)==false)
        {
          formValues[name] = "12:00 AM - 2:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked6)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
    handleChangetiming2b = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green7: !this.state.green7});
        this.setState(state => ({ checked7: !state.checked7 }));
        if((this.state.checked7)==false)
        {
          formValues[name] = "12:00 AM - 2:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked7)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
     handleChangetiming2c = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green8: !this.state.green8});
        this.setState(state => ({ checked8: !state.checked8 }));
        if((this.state.checked8)==false)
        {
          formValues[name] = "12:00 AM - 2:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked8)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
     handleChangetiming2d = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green9: !this.state.green9});
        this.setState(state => ({ checked9: !state.checked9 }));
        if((this.state.checked9)==false)
        {
          formValues[name] = "12:00 AM - 2:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked9)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
    handleChangetiming2e = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green10: !this.state.green10});
        this.setState(state => ({ checked10: !state.checked10 }));
        if((this.state.checked10)==false)
        {
          formValues[name] = "12:00 AM - 2:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked10)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

  handleChangetiming3a = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green11: !this.state.green11});
        this.setState(state => ({ checked11: !state.checked11 }));
        if((this.state.checked11)==false)
        {
          formValues[name] = "2:00 AM - 4:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked11)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
    handleChangetiming3b = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green12: !this.state.green12});
        this.setState(state => ({ checked12: !state.checked12 }));
        if((this.state.checked12)==false)
        {
          formValues[name] = "2:00 AM - 4:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked12)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
         handleChangetiming3c = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green13: !this.state.green13});
        this.setState(state => ({ checked13: !state.checked13 }));
        if((this.state.checked13)==false)
        {
          formValues[name] = "2:00 AM - 4:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked13)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
   handleChangetiming3d = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green14: !this.state.green14});
        this.setState(state => ({ checked14: !state.checked14 }));
        if((this.state.checked14)==false)
        {
          formValues[name] = "2:00 AM - 4:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked14)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
   handleChangetiming3e = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green15: !this.state.green15});
        this.setState(state => ({ checked15: !state.checked15 }));
        if((this.state.checked15)==false)
        {
          formValues[name] = "2:00 AM - 4:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked15)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

  handleChangetiming4a = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green16: !this.state.green16});
        this.setState(state => ({ checked16: !state.checked16 }));
        if((this.state.checked16)==false)
        {
          formValues[name] = "4:00 AM - 6:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked16)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
         handleChangetiming4b = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green17: !this.state.green17});
        this.setState(state => ({ checked17: !state.checked17 }));
        if((this.state.checked17)==false)
        {
          formValues[name] = "4:00 AM - 6:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked17)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
         handleChangetiming4c = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
      let value = e.target.value;
        this.setState({green18: !this.state.green18});
        this.setState(state => ({ checked18: !state.checked18 }));
        if((this.state.checked18)==false)
        {
          formValues[name] = "4:00 AM - 6:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked18)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
         handleChangetiming4d = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
            this.setState({green19: !this.state.green19});
        this.setState(state => ({ checked19: !state.checked19 }));
        if((this.state.checked19)==false)
        {
          formValues[name] = "4:00 AM - 6:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked19)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
   handleChangetiming4e = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green20: !this.state.green20});
        this.setState(state => ({ checked20: !state.checked20 }));
        if((this.state.checked20)==false)
        {
          formValues[name] = "4:00 AM - 6:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked20)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

        handleChangetiming5a = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green21: !this.state.green21});
        this.setState(state => ({ checked21: !state.checked21 }));
        if((this.state.checked21)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked21)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
        handleChangetiming5b = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green22: !this.state.green22});
        this.setState(state => ({ checked22: !state.checked22 }));
        if((this.state.checked22)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked22)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
        handleChangetiming5c = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green23: !this.state.green23});
        this.setState(state => ({ checked23: !state.checked23 }));
        if((this.state.checked23)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked23)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
        handleChangetiming5d = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green24: !this.state.green24});
        this.setState(state => ({ checked24: !state.checked24 }));
        if((this.state.checked24)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked24)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
        handleChangetiming5e = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green25: !this.state.green25});
        this.setState(state => ({ checked25: !state.checked25 }));
        if((this.state.checked25)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked25)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
        handleChangetiming5f = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green26: !this.state.green26});
        this.setState(state => ({ checked26: !state.checked26 }));
        if((this.state.checked26)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked26)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
   handleChangetiming5g = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green27: !this.state.green27});
        this.setState(state => ({ checked27: !state.checked27 }));
        if((this.state.checked27)==false)
        {
          formValues[name] = "6:00 AM - 11:00 PM";
          this.setState({formValues});
        }
        else if((this.state.checked27)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

  handleChangetiming6a = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green28: !this.state.green28});
        this.setState(state => ({ checked28: !state.checked28 }));
        if((this.state.checked28)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked28)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
   handleChangetiming6b = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green29: !this.state.green29});
        this.setState(state => ({ checked29: !state.checked29 }));
        if((this.state.checked29)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked29)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
  handleChangetiming6c = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green30: !this.state.green30});
        this.setState(state => ({ checked30: !state.checked30 }));
        if((this.state.checked30)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked30)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
          handleChangetiming6d = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green31: !this.state.green31});
        this.setState(state => ({ checked31: !state.checked31 }));
        if((this.state.checked31)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked31)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
          handleChangetiming6e = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green32: !this.state.green32});
        this.setState(state => ({ checked32: !state.checked32 }));
        if((this.state.checked32)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked32)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
          handleChangetiming6f = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green33: !this.state.green33});
        this.setState(state => ({ checked33: !state.checked33 }));
        if((this.state.checked33)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked33)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }
          handleChangetiming6g = (e) => {
    e.preventDefault();
       let formValues = this.state.formValues;
      let name = e.target.name;
        this.setState({green34: !this.state.green34});
        this.setState(state => ({ checked34: !state.checked34 }));
        if((this.state.checked34)==false)
        {
          formValues[name] = "Unavailable";
          this.setState({formValues});
        }
        else if((this.state.checked34)==true)
        {
          formValues[name]="";
          this.setState({formValues});
        }
       }

handleSubmit = (e) => {
  e.preventDefault() 
  //if state is true, then send to json
    var n = JSON.stringify(this.state.formValues);
    console.log(n);
    console.log(this.state.checked);//true if button is red, false is button is white
    let obj = JSON.parse(n);
    alert(n);
    console.log(obj);
   }
  //  handleChange = () => {
  //   this.setState(state => ({ checked: !state.checked }));
  // };



render() {
  let btn_class1 = this.state.green1 ? "greenButton" : "whiteButton";
  let btn_class2 = this.state.green2 ? "greenButton" : "whiteButton";
  let btn_class3 = this.state.green3 ? "greenButton" : "whiteButton";
  let btn_class4 = this.state.green4 ? "greenButton" : "whiteButton";
  let btn_class5 = this.state.green5 ? "greenButton" : "whiteButton";
  let btn_class6 = this.state.green6 ? "greenButton" : "whiteButton";
  let btn_class7 = this.state.green7 ? "greenButton" : "whiteButton";
  let btn_class8 = this.state.green8 ? "greenButton" : "whiteButton";
  let btn_class9 = this.state.green9 ? "greenButton" : "whiteButton";
  let btn_class10 = this.state.green10 ? "greenButton" : "whiteButton";
  let btn_class11 = this.state.green11 ? "greenButton" : "whiteButton";
  let btn_class12 = this.state.green12 ? "greenButton" : "whiteButton";
  let btn_class13 = this.state.green13 ? "greenButton" : "whiteButton";
  let btn_class14 = this.state.green14 ? "greenButton" : "whiteButton";
  let btn_class15 = this.state.green15 ? "greenButton" : "whiteButton";
  let btn_class16 = this.state.green16 ? "greenButton" : "whiteButton";
  let btn_class17 = this.state.green17 ? "greenButton" : "whiteButton";
  let btn_class18 = this.state.green18 ? "greenButton" : "whiteButton";
  let btn_class19 = this.state.green19 ? "greenButton" : "whiteButton";
  let btn_class20 = this.state.green20 ? "greenButton" : "whiteButton";
  let btn_class21 = this.state.green21 ? "greenButton" : "whiteButton";
  let btn_class22 = this.state.green22 ? "greenButton" : "whiteButton";
  let btn_class23 = this.state.green23 ? "greenButton" : "whiteButton";
  let btn_class24 = this.state.green24 ? "greenButton" : "whiteButton";
  let btn_class25 = this.state.green25 ? "greenButton" : "whiteButton";
  let btn_class26 = this.state.green26 ? "greenButton" : "whiteButton";
  let btn_class27 = this.state.green27 ? "greenButton" : "whiteButton";
  let btn_class28 = this.state.green28 ? "greenButton" : "whiteButton";
  let btn_class29 = this.state.green29 ? "greenButton" : "whiteButton";
  let btn_class30 = this.state.green30 ? "greenButton" : "whiteButton";
  let btn_class31 = this.state.green31 ? "greenButton" : "whiteButton";
  let btn_class32 = this.state.green32 ? "greenButton" : "whiteButton";
  let btn_class33 = this.state.green33 ? "greenButton" : "whiteButton";
  let btn_class34 = this.state.green34 ? "greenButton" : "whiteButton";
  
 // let checked = this.state.checked;
   //checked=(checked)
    return (
        <form onSubmit={this.handleSubmit} onChange={this.handleChange.bind(this)} >
       <h1>&emsp;Grant-in-Aide application Fall 2017</h1>
       <h2 className="header">
      Please see Natasha in the office if you have any questions.
        <p></p>
        Applications DUE by Wednesday, August 23rd at 12:00 p.m. (noon).
       <p></p>
       Description of jobs can be found on notice board above the water fountain or in the office. 
       <p></p>
       Time sheets must be turned in every two weeks on the 1st and 15th of the month.
       On time sheets that are 3 days or more overdue, staff reserves the right to refuse to credit the hours claimed.
       
         </h2>

      <div>
         <p></p>
        <label className="input" for="input">Name</label>
        <br></br>
         <input className="input" 
        
         name="name"
         value={this.state.formValues["name"]} 
         type="text"  /> 
         <p></p>
         <label className="input" for="input">What is your email address?</label>
        <br></br>
         <input className="input"
         name="email"
         value={this.state.formValues["email"]} 
         type="text"/> 
         <p></p>
         <label className="input" for="input">What is your telephone number?</label>
        <br></br>
         <input className="input"  name="phone"
         value={this.state.formValues["phone"]}
          type="number"/> 
         <p></p>

         </div>
 
         <label className="input">Please indicate your first choice position</label>
         <br></br>
         <select id="first" className="input"
          name="first"
          value={this.state.formValues["first"]}> 
         <option>Choose from this list</option>
            <option>All-Around Aide</option>
            <option>Bathroom Aide</option>
            <option>Computer Aide</option>
            <option>Flag Aide</option>
            <option>Kitchen Aide</option>
            <option>Maintenance Aide</option>
            <option>Evening Receptionist (6-11 p.m. evenings)</option>
            <option>Traditional Dress Aide</option>
            <option>Office Aide</option>
         </select>
         <label className="input2" for="input2">Add option</label>
         <input className="input2" name="first_add_option"
          value={this.state.formValues["first_add_option"]} type="text"/> 
         <p></p>

         <label id="second"  className="input">Please indicate your second choice position</label>
         <br></br>
         <select className="input"  name="second"
          value={this.state.formValues["second"]}> 
         <option>Choose from this list</option>
            <option>All-Around Aide</option>
            <option>Bathroom Aide</option>
            <option>Computer Aide</option>
            <option>Flag Aide</option>
            <option>Kitchen Aide</option>
            <option>Maintenance Aide</option>
            <option>Evening Receptionist (6-11 p.m. evenings)</option>
            <option>Traditional Dress Aide</option>
            <option>Office Aide</option>
         </select>
         <p></p>

         <label id="third" className="input">Please indicate your third choice position</label>
         <br></br>
         <select className="input"  name="third"
          value={this.state.formValues["third"]}> 
         <option>Choose from this list</option>
            <option>All-Around Aide</option>
            <option>Bathroom Aide</option>
            <option>Computer Aide</option>
            <option>Flag Aide</option>
            <option>Kitchen Aide</option>
            <option>Maintenance Aide</option>
            <option>Evening Receptionist (6-11 p.m. evenings)</option>
            <option>Traditional Dress Aide</option>
            <option>Office Aide</option>
         </select>
         <p></p>

         <label id="fourth"  className="input">Please indicate your fourth choice position</label>
         <br></br>
         <select className="input"  name="fourth"
          value={this.state.formValues["fourth"]}> 
         <option>Choose from this list</option>
            <option>All-Around Aide</option>
            <option>Bathroom Aide</option>
            <option>Computer Aide</option>
            <option>Flag Aide</option>
            <option>Kitchen Aide</option>
            <option>Maintenance Aide</option>
            <option>Evening Receptionist (6-11 p.m. evenings)</option>
            <option>Traditional Dress Aide</option>
            <option>Office Aide</option>
         </select>
         <p></p>

         <label className="input">Are you willing to work as Bathroom Aide in addition to another position?</label>
         <br></br>
         <select className="input"  name="add_bathroom_aide"
          value={this.state.formValues["add_bathroom_aide"]}> 
         <option>Choose from this list</option>
            <option>Yes</option>
            <option>No</option>
            </select>
         <p></p>

         <label className="input">Are you willing to work as Flag Aide in addition to another position?</label>
         <br></br>
         <select className="input"  name="add_flag_aide"
          value={this.state.formValues["add_flag_aide"]}> 
         <option>Choose from this list</option>
            <option>Yes</option>
            <option>No</option>
            </select>
         <p></p>

         <label className="input">What skills and/or experience do you have that make you a good candidate for each of the positions you listed as first, second, third choice? 
         </label>
         <br></br>
         <label className="input">If applying for Office Aide or Office Receptionist, please submit a C.V./resume to the office. (Speak with Natasha if you have questions.)
         </label>
         <br></br>
         <input className="input" 
         name="skills"
         size="75"
         value={this.state.formValues["skills"]}  
         type="text"/> 
         <p></p>

        <h2>&emsp;&nbsp;&nbsp;Pancake Breakfast</h2>

        <label className="input">Do you agree to work at least two shifts for Pancake Breakfast (PCB), 
        which will be held  on Sunday, October 22nd?</label>
         <br></br>
         <select className="input"  name="shifts_PCB"
          value={this.state.formValues["shifts_PCB"]}> 
         <option>Choose from this list</option>
            <option>Yes</option>
            <option>No</option>
            </select>
         <p></p>

        <label className="input">Do you agree to attend Pancake Breakfast (PCB) Training on Friday, October 20th?</label>
         <br></br>
         <select className="input"  name="training_PCB"
          value={this.state.formValues["training_PCB"]}> 
         <option>Choose from this list</option>
            <option>Yes</option>
            <option>No</option>
            </select>
         <p></p>
         

        <h2>&emsp;&nbsp;&nbsp;Availability</h2>
        <div className="input">Please indicate ALL of the days and times that you ARE AVAILABLE to work a
           full 2 hour shift or full 5 hour Evening Receptionist shift. The more availability 
           you have, the more likely you are to get a GIA position. 
           (Afternoon Receptionists must be available between 2pm and 4pm 
           at least three weekdays.)</div>
           <p></p>    

        <div>
          <table className="input" border="1">
            <thead>
             <tr>
             <th>&emsp;&emsp;</th>
               <th>&emsp;Monday&emsp;</th>
               <th>&emsp;Tuesday&emsp;</th>
               <th>&emsp;Wednesday&emsp;</th>
               <th>&emsp;Thursday&emsp;</th>
               <th>&emsp;Friday&emsp;</th>
               <th>&emsp;Saturday&emsp;</th>
               <th>&emsp;Sunday&emsp;</th>
             </tr>
             <tr>
               <td>10:00 AM - 12:00 PM</td>
               <td><input className={btn_class1} type="button" name="mondaymorning"  onClick={this.handleChangetiming1a.bind(this)}></input></td>
               <td><input className={btn_class2} type="button" name="tuesdaymorning"  onClick={this.handleChangetiming1b.bind(this)}></input></td>
               <td><input className={btn_class3} type="button" name="wednesdaymorning" value="" onClick={this.handleChangetiming1c.bind(this)}></input></td>
               <td><input className={btn_class4} type="button" name="thursdaymorning" value="" onClick={this.handleChangetiming1d.bind(this)}></input></td>
               <td><input className={btn_class5} type="button" name="fridaymorning" value="" onClick={this.handleChangetiming1e.bind(this)}></input></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>12:00 PM - 2:00 PM</td>
               <td><input className={btn_class6} type="button" name="mondaynoon" value="" onClick={this.handleChangetiming2a.bind(this)}></input></td>
               <td><input className={btn_class7} type="button" name="tuesdaynoon" value="" onClick={this.handleChangetiming2b.bind(this)}></input></td>
               <td><input className={btn_class8} type="button" name="wednesdaynoon" value="" onClick={this.handleChangetiming2c.bind(this)}></input></td>
               <td><input className={btn_class9} type="button" name="thursdaynoon" value="" onClick={this.handleChangetiming2d.bind(this)}></input></td>
               <td><input className={btn_class10} type="button" name="fridaynoon" value="" onClick={this.handleChangetiming2e.bind(this)}></input></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>2:00 PM - 4:00 PM</td>
               <td><input className={btn_class11} type="button" name="mondayafternoon1" value="" onClick={this.handleChangetiming3a.bind(this)}></input></td>
               <td><input className={btn_class12} type="button" name="tuesdayafternoon1" value="" onClick={this.handleChangetiming3b.bind(this)}></input></td>
               <td><input className={btn_class13} type="button" name="wednesdayafternoon1" value="" onClick={this.handleChangetiming3c.bind(this)}></input></td>
               <td><input className={btn_class14} type="button" name="thursdayafternoon1" value="" onClick={this.handleChangetiming3d.bind(this)}></input></td>
               <td><input className={btn_class15} type="button" name="fridayafternoon1" value="" onClick={this.handleChangetiming3e.bind(this)}></input></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>4:00 PM - 6:00 PM</td>
               <td><input className={btn_class16} type="button" name="mondayafternoon2" value="" onClick={this.handleChangetiming4a.bind(this)}></input></td>
               <td><input className={btn_class17} type="button" name="tuesdayafternoon2" value="" onClick={this.handleChangetiming4b.bind(this)}></input></td>
               <td><input className={btn_class18} type="button" name="wednesdayafternoon2" value="" onClick={this.handleChangetiming4c.bind(this)}></input></td>
               <td><input className={btn_class19} type="button" name="thursdayafternoon2" value="" onClick={this.handleChangetiming4d.bind(this)}></input></td>
               <td><input className={btn_class20} type="button" name="fridayafternoon2" value="" onClick={this.handleChangetiming4e.bind(this)}></input></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>6:00 PM - 11:00 PM</td>
               <td><input className={btn_class21} type="button" name="mondayevening" value="" onClick={this.handleChangetiming5a.bind(this)}></input></td>
               <td><input className={btn_class22} type="button" name="tuesdayevening" value="" onClick={this.handleChangetiming5b.bind(this)}></input></td>
               <td><input className={btn_class23} type="button" name="wednesdayevening" value="" onClick={this.handleChangetiming5c.bind(this)}></input></td>
               <td><input className={btn_class24} type="button" name="thursdayevening" value="" onClick={this.handleChangetiming5d.bind(this)}></input></td>
               <td><input className={btn_class25} type="button" name="fridayevening" value="" onClick={this.handleChangetiming5e.bind(this)}></input></td>
               <td><input className={btn_class26} type="button" name="saturdayevening" value="" onClick={this.handleChangetiming5f.bind(this)}></input></td>
               <td><input className={btn_class27} type="button" name="sundayevening" value="" onClick={this.handleChangetiming5g.bind(this)}></input></td>
             </tr>
             <tr>
               <td>Unavailable</td>
               <td><input className={btn_class28} type="button" name="monday" value="" onClick={this.handleChangetiming6a.bind(this)}></input></td>
               <td><input className={btn_class29} type="button" name="tuesday" value="" onClick={this.handleChangetiming6b.bind(this)}></input></td>
               <td><input className={btn_class30} type="button" name="wednesday" value="" onClick={this.handleChangetiming6c.bind(this)}></input></td>
               <td><input className={btn_class31} type="button" name="thursday" value="" onClick={this.handleChangetiming6d.bind(this)}></input></td>
               <td><input className={btn_class32} type="button" name="friday" value="" onClick={this.handleChangetiming6e.bind(this)}></input></td>
               <td><input className={btn_class33} type="button" name="saturday" value="" onClick={this.handleChangetiming6f.bind(this)}></input></td>
               <td><input className={btn_class34} type="button" name="sunday" value="" onClick={this.handleChangetiming6g.bind(this)}></input></td>
             </tr>

            </thead>
          </table>
        </div>







        <h3  className="input">Thank you for applying for a Grant-in-Aide (GIA) position at I-House.</h3>
        <input className="button3" type="submit" value="Submit" /> 
        <p></p>
      </form>
    )
  }
}
export default App
