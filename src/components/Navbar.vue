<template>
    <div class="navbar">
      <nav>
        <img src="@/assets/image/logo1.png"/>
        <h1><router-link :to="{ name: 'Home' }">SongStream</router-link></h1>
        <div class="links">
            <div v-if="user">
              <router-link class="btn" :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
              <router-link class="btn" :to="{ name: 'UserPlaylists' }">My Playlist</router-link>
              <span>Hi there, {{ user.displayName }}</span>
                <button class="btn-primary" @click="handleClick">Logout</button>
            </div>
            <div v-else>
                <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
                <router-link class="btn-primary" :to="{ name: 'Login' }">Login</router-link>
            </div>
        </div>
      </nav>
    </div>
</template>
  
<script>
    // using @ means start at the project src root
    import useLogout from '../composables/useLogout'
    import getUser from '../composables/getUser'
    import { useRouter } from 'vue-router'

    export default {
        setup() {
            const { user } = getUser()
            const { logout } = useLogout()
            const router = useRouter()

            const handleClick = async () => {
            await logout()
            console.log('logged out')
            router.push({ name: 'Login' })
            }

            return { handleClick, user }
        }
    }
</script>
  
<style scoped>
    .navbar {
      padding: 16px 10px;
      margin-bottom: 60px;
      background: #F7F5F4;
    }
    nav {
      display: flex;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    nav img {
      max-height: 60px;
    }
    nav h1 {
      margin-left: 10px;
    }
    nav .links {
      margin-left: auto;
    }
    nav .links a, button {
      margin-left: 16px;
      font-size: 14px;
    }
    span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>