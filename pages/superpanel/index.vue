<script setup lang="ts">
const client = useSupabaseClient()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function signIn() {
    errorMessage.value = ''

    try {
        const {error} = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });

        if (error) throw error;

        await navigateTo('/superpanel/dashboard');
    } catch (error) {
        if (error instanceof Error) {
        errorMessage.value = error.message;
        } else {
        errorMessage.value = String(error);
        }
    }
}

</script>

<template>
    <div class="login-wrapper">
        <div class="login-box">
            <h1 class="login-title">Connexion</h1>

            <form class="login-form" @submit.prevent="signIn">
                <div class="form-group">
                    <label for="email">Adresse email</label>
                    <input  id="email" v-model="email" type="email"  class="login-input"  required>
                </div>

                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input id="password" v-model="password" type="password" class="login-input" required>
                </div>

                <button type="submit" class="login-button">Se connecter</button>
            </form>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .login-wrapper {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $background-color;
        padding: 2rem;
    }

    .login-box {
        padding: 2.5rem 2rem;
        backdrop-filter: blur(16px) saturate(159%);
        -webkit-backdrop-filter: blur(16px) saturate(159%);
        background-color: rgba(211, 203, 197, 0.15);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
}

    .login-title {
        font-size: 1.8rem;
        font-family: 'Clash Grotesk', sans-serif;
        text-align: center;
        margin-bottom: 2rem;
        color: $primary-color;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 0.4rem;
            font-family: 'Clash Grotesk', sans-serif;
            font-size: 0.95rem;
            color: $primary-color;
        }

        input.login-input {
            padding: 0.75rem 1rem;
            border: 1px solid $background-color;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.2s ease;
            background-color: #F6F0F0;

            &:focus {
                border-color: $secondary-color;
                outline: none;
            }
        }
    }

    .login-button {
        padding: 0.75rem 1rem;
        font-size: 1rem;
        font-family: 'Clash Grotesk', sans-serif;
        background-color: $secondary-color;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: $darken-secondary-color;
        }
    }

    .login-error {
        margin-top: 1.2rem;
        color: #dc2626;
        font-size: 0.95rem;
        text-align: center;
    }

    .error-message {
        color: #e53e3e;
        background-color: #fff5f5;
        border: 1px solid #feb2b2;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        font-family: 'Clash Grotesk', sans-serif;
}
</style>
