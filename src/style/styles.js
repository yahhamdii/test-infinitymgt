import styled from 'styled-components';

export default (Component) => styled(Component)`
  input { 
    width: 35%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    display: block;
  }
  .btn {
    background-color: #092ba8;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    float: left;
  }
  .login {
    margin: auto;
    width: 50em;
    padding: 50px;
  }
  .header {
    overflow: hidden;
    margin: 0px auto 0px auto;
    padding: 0px 20px 0px 20px;
    background: #F8F9FB;
  }
  
  .header a {
    float: left;
    display: block;
    color: #000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
  }
  .header .title {
      font-size: 17px;
  }
    
`;
