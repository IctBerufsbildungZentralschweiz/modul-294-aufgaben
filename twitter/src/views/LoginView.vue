<template>
  <div class="login">
    <section class="login-wrapper">
      <form action="#" class="login-form" autocomplete="off">
        <div class="form-group">
          <label class="form-label" for="email">E-Mail</label>
          <input class="form-input" type="email" id="email" />
          <div class="form-error">
            Unbekannter Benutzer
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

