# Plushie React Dashboard 

## Login Page
### LoginPage.js
This page has a 2 columns layout - Sign In Form & Display Hero Image.

```javascript
    <PageCardStyles>
        <ToastContainer/>
        
        {/* Sign In Form */}
        <SignInForm>
            <header>
                <h1>Welcome to</h1>
                <img src={Logo} alt='Plushie Logo'/>
            </header> 

            <form onSubmit={onLoginRequest}>
                <FormControl>
                    <Label htmlFor='email' display="">Email</Label>
                    <LabelIcon><IoMail/></LabelIcon>
                    <Input type="email" id="email" placeholder='janedoe@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                </FormControl>

                <FormControl>
                    <Label htmlFor='password'>Password</Label>
                    <LabelIcon><IoLockClosed/></LabelIcon>
                    <Input type="password" id="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                </FormControl>

                <SubmitButton type="submit" padding=".75rem 2.25rem" texttransform="lowercase" bgcolor="#FB7185" fs="1.125rem" width="fit-content">Sign In</SubmitButton>
            </form>
        </SignInForm>

        {/* Display Picture */}
        <DisplayPic>
            <img src={LoginHeroImg} alt='Mushroom Plusie Toy'/>
        </DisplayPic>

    </PageCardStyles>
```

## Dashboard
### Dashboard.js

This page is access from successful login. It contains 3 main components: Sidebar, Appbar and Panel that are divide into a 2-column-layout.

1. Sidebar Items: Logo, Sub-page links and Logout link
1. Appbar: display 2nd nav items & Panel: display page content

```javascript

    <DashBoardStyles>
        <SideBar/>
        
        <MainContent>
            <AppBar/>  
            <Panels/>
        </MainContent>
            
    </DashBoardStyles>

```


## 404 Page
### PageNotFound.js
This page applied layout from Login page with text info & Display Hero Image import from style of Login Page.

```javascript
    <PageCardStyles>
        {/* 404 info */}
        <PageNotFoundStyles>
            <header>
                <h1>404 error </h1>
                <h2><span>Oops</span><br/>.<br/>.<br/>.</h2>
            </header>

            <p>It seems like what you are looking for is not existed. Let's get you back to a better spot.</p>

            <SubmitButton padding=".75rem 2.25rem" texttransform="lowercase" bgcolor="#FB7185" color="#fff" fs="1.125rem" width="fit-content">
            {
                isUser? <Link to='/dashboard'>Back to Safety</Link> : <Link to='/'>Back to Safety</Link>
            }
            </SubmitButton>
        </PageNotFoundStyles>

        {/* display hero img */}
        <DisplayPic>
            <img src={PageNotFoundHeroImg} alt='Potato Plusie Toy'/>
        </DisplayPic>
    </PageCardStyles>
```