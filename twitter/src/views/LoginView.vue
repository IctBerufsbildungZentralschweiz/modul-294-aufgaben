<template>
  <div class="login">
    <section class="login-wrapper">
      <h2>Login</h2>

      <form action="#" class="login-form">
        <div class="form-group">
          <label class="form-label" for="username">Benutzername</label>
          <input class="form-input" type="text" id="username" />
          <div class="form-error">
            Unbekannter Benutzername
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Passwort</label>
          <input class="form-input" type="password" id="password" />
          <div class="form-error">
            Falsches Passwort
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn--primary btn--block">
            Login
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

