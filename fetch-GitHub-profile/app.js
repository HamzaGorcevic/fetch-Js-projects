
prijava = document.querySelector('#Login')
loginPage = document.querySelector('.loginPage')
dugme = document.querySelector('.dugme')

body = document.querySelector('body')


dugme.addEventListener('click',()=>{
    container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)

    if(prijava != ''){
        container.style.display = 'flex'
        loginPage.style.display = 'none'

        getData = async()=>{
            response = await fetch(`https://api.github.com/users/${prijava.value}`)
            res = await response.json()
            if(res.name === undefined){
                container.style.display = 'none'
                loginPage.style.display = 'flex'
        
            }else{
                backLogin = document.createElement('button')
                backLogin.innerText = 'go back'
            
                backLogin.classList.add('backLogin')
                backLogin.addEventListener('click',()=>{
                    container.style.display = 'none'
                    container.remove()
                    loginPage.style.display = 'flex'
                })
                container.appendChild(backLogin)
                
            
                img = document.createElement('img')
                img.classList.add('slika')
                img.src = res.avatar_url
                container.appendChild(img)
                fb = document.createElement('i')
                fb.classList.add('fb')
                fb.innerHTML = '<i class="fa-brands fa-facebook"></i>'
                insta = document.createElement('i')
                insta.innerHTML = '<i class="fa-brands fa-instagram"></i>'
                insta.classList.add('insta')
                git = document.createElement('i')
                
                git.innerHTML = '<i class="fa-brands fa-github"></i>'
                git.addEventListener('click',()=>{
                window.open(res.html_url)
                })
                insta.addEventListener('click',()=>{
                window.open('https://www.instagram.com/hamza_gorcevic/')
                })
                container.append(insta,fb,git)
                naslov = document.createElement('h1')
                naslov.innerText = res.name
                naslov.style.fontFamily = 'Poppins,sans-serif'
                naslov.classList.add('naslow')
                container.appendChild(naslov)
                podNaslov = document.createElement('p')
                podNaslov.style.fontFamily = 'Poppin,sans-serif'
            
                podNaslov.innerText = res.login
                podNaslov.style.fontSize = '20px'
                podNaslov.style.marginTop = '3px'
                podNaslov.style.color = 'gray'
                container.appendChild(podNaslov)
                littleDiv = document.createElement('div')
                littleDiv.classList.add('littleDiv')
                followers = document.createElement('p')
                following = document.createElement('p')
                following.innerText = 'following'
                
                followers.innerText = 'followers'
                followers.classList.add('follow')
                following.classList.add('follow')
                littleDiv.appendChild(followers)
                littleDiv.appendChild(following)
                container.appendChild(littleDiv)

                back = document.createElement('button')
                back.innerText = 'Go back'
                back.classList.add('back')


                following.addEventListener('click',()=>{
                    container.appendChild(back)

                    followingAsync = async()=>{
                        followingF = await fetch(`https://api.github.com/users/${res.login}/following`) 
                        followingRes = await followingF.json()
                    
                        containerSecond = document.createElement('div')
                        containerSecond.classList.add('container2')
                        container.appendChild(containerSecond)
                    
                        if(followingRes.length >= 1){
                            for(i=0;i<followingRes.length ;i++){
                            
                    
                
                                followerDiv = document.createElement('div')
                                followerDiv.classList.add('followerDiv')
                                followerDivs = document.querySelectorAll('.followerDiv')
                    
                                containerSecond.appendChild(followerDiv)
                                imeFollower = document.createElement('h1')
                                imeFollower.classList.add('ImeFriend')
                                imeFollower.innerText = followingRes[i].login
                                followerDiv.appendChild(imeFollower)
                                avatar = document.createElement('img')
                                avatar.classList.add('avatar')
                                avatar.src = followingRes[i].avatar_url
                                followerDiv.appendChild(avatar)
    
                            
                                link = document.createElement('a')
                                link.innerText = 'Go to profile'
                                link.classList.add('link')
                                link.href = followingRes[i].html_url
                                followerDiv.appendChild(link)
                                back.addEventListener('click',()=>{
    
                                    container.removeChild(back)
                                    container.removeChild(containerSecond)
                                    
                                })
                
                                
                                
                                
                            }


                        }else{
                            followerDiv = document.createElement('div')
                            followerDiv.classList.add('followerDiv')
                            followerDiv.innerText = 'No users found'
                            containerSecond.appendChild(followerDiv)
                            
                            back.addEventListener('click',()=>{
    
                                container.removeChild(back)
                                container.removeChild(containerSecond)
                                
                            })
                        }
                        
                        

                    }
                    followingAsync()

                })





                
                followers.addEventListener('click',()=>{
                    container.appendChild(back)
                    
                    DataAsync = async()=>{
                        followF = await fetch(res.followers_url)
                        followFres = await followF.json()
            
                        containerSecond = document.createElement('div')
                        containerSecond.classList.add('container2')
                        container.appendChild(containerSecond)


                        if(followFres.length >= 1){
                            for(i=0;i<followFres.length ;i++){
                    
                
                                followerDiv = document.createElement('div')
                                followerDiv.classList.add('followerDiv')
                                followerDivs = document.querySelectorAll('.followerDiv')
                    
                                containerSecond.appendChild(followerDiv)
                                imeFollower = document.createElement('h1')
                                imeFollower.classList.add('ImeFriend')
                                imeFollower.innerText = followFres[i].login
                                followerDiv.appendChild(imeFollower)
                                avatar = document.createElement('img')
                                avatar.classList.add('avatar')
                                avatar.src = followFres[i].avatar_url
                                followerDiv.appendChild(avatar)
                            
                            
                                link = document.createElement('a')
                                link.innerText = 'Go to profile'
                                link.classList.add('link')
                                link.href = followFres[i].html_url
                                followerDiv.appendChild(link)
                
                                
                               
                                back.addEventListener('click',()=>{
                                    container.removeChild(back)
                                    container.removeChild(containerSecond)
                                    
                                })
                            
                
                
                            }

                        }else{
                            followerDiv = document.createElement('div')
                            followerDiv.classList.add('followerDiv')
                            followerDiv.innerText = 'No users found'
                            containerSecond.appendChild(followerDiv)
                            
                            back.addEventListener('click',()=>{
    
                                container.removeChild(back)
                                container.removeChild(containerSecond)
                                
                            })
                            
                        }
                        
                    }
            
        
        
                DataAsync()
            })
        }
        
        
        
            
        }
        
        getData()
        
        
        
    
    }
    
    
    

})












    
      
      
      
      






