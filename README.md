# React with Styled Components

- Configure Styled Components
- Extension for styled components snippets
- Create a global stylesheet
- StyledComponent you use createGlobalStyle

```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: red;
    }
`
export {GlobalStyle}
```