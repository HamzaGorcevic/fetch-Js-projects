container = document.querySelector('.container')






getData = async()=>{
    response = await fetch('https://api.github.com/users/hamzagorcevic')
    res = await response.json()
    

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
      window.open('https://github.com/HamzaGorcevic')
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

    followers.addEventListener('click',()=>{
        DataAsync = async()=>{
            followF = await fetch(res.followers_url)
            followFres = await followF.json()
            console.log(followFres);
            containerSecond = document.createElement('div')
            containerSecond.classList.add('container2')
            container.appendChild(containerSecond)
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
                back = document.createElement('button')
                back.innerText = 'Go back'
                back.classList.add('back')
                containerSecond.appendChild(back)
                link = document.createElement('a')
                link.innerText = 'Go to profile'
                link.classList.add('link')
                link.href = followFres[i].html_url
                followerDiv.appendChild(link)

                
                // followerDiv.addEventListener('click',()=>{
                //     followerDivs = document.querySelectorAll('.followerDiv')
                //     window.open(followFres[i-1].html_url)
                // })
                back.addEventListener('click',()=>{
                    container.removeChild(containerSecond)
                    
                })
            


            }
        }


        DataAsync()
    })



    
}

getData()
















    
      
      
      
      






