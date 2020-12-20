import styled from 'styled-components';

export default (Component) => styled(Component)`
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
