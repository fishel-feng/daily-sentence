import React, {Component} from 'react';
import './style.css';

export default class Sentence extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sentenceContent: '',
      sentencePoetryName: '',
      sentenceAuthorName: ''
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const id = Math.floor(6000 * Math.random());
    const query = `query{
                     sentence(id: "${id}"){
                       sentenceContent
                       sentencePoetryName
                       sentenceAuthorName
                     }
                   }`;
    fetch('/graphql?query=' + query).then(res => res.json()).then(res => {
      if (res.data.sentence) {
        this.setState({
          sentenceContent: res.data.sentence.sentenceContent,
          sentencePoetryName: res.data.sentence.sentencePoetryName,
          sentenceAuthorName: res.data.sentence.sentenceAuthorName
        })
      } else {
        this.getData()
      }
    })
  }

  render() {
    return (
      <div className="Sentence">
        <img className="background" src="https://picsum.photos/1440/900/?random" alt=""/>
        <div className="container">
          <span className="content">{this.state.sentenceContent}</span>
          <span className="tail">--{this.state.sentencePoetryName} {this.state.sentenceAuthorName}</span>
        </div>
      </div>
    );
  }
}
