import styled from 'styled-components';

export default (Component) => styled(Component)`
  .login {
    margin: auto;
    width: 50em;
    padding: 50px;
  }
  .login input {
    width: 35%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    display: block;
  }
  .login .btn {
    background-color: #092ba8;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    float: left;
  }
  .login p{
      color: red;
  }
  .task {
    width: 100em;
    padding: 50px;
  }
  .task input {
    width: 200px;
    padding: 5px 5px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  .task .btn {
    background-color: #092ba8;
    border: none;
    color: white;
    padding: 8px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }

  .header {
    overflow: hidden;
    margin: 0px auto 0px auto;
    padding: 0px 20px 0px 20px;
    background: #f8f9fb;
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
  .tbl-header {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .tbl-content {
    height: auto;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  table {
    width: 100%;
    margin: 30px auto 0px auto;
    table-layout: fixed;
  }
  .notcompleted {
    background-color: red;
    color: #fff;
    width: 150px;
  }
  .completed {
    background-color: green;
    color: #fff;
    width: 150px;
  }
`;
