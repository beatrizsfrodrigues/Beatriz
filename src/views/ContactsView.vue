<template>
  <div class="mainBody titlePage">
    <h1>Contacts</h1>
    <div class="horizontal" id="contactsDiv">
      <div id="contactsDiv1">
        <h2>Get in touch!</h2>
        <p>
          Hi! If you want to get in contact with me you can send me an email or
          follow me on my socials.
        </p>
        <h3>My e-mail</h3>
        <p>beatriz.sfrodrigues@gmail.com</p>
        <h3>My social media</h3>
        <div id="socialC">
          <img src="../images/github.svg" alt="" />
          <img src="../images/linkedin.svg" alt="" />
          <img src="../images/behance.svg" alt="" />
        </div>
      </div>

      <form
        action="mailto:someone@example.com"
        method="post"
        enctype="text/plain"
      >
        <div class="horizontal mandatoryDiv">
          <h3>Your e-mail</h3>
          <img class="mandatory" src="../images/asterisk1.svg" alt="" />
        </div>
        <input type="email mandatoryDiv" required />
        <div class="horizontal">
          <h3>Subject</h3>
          <img class="mandatory" src="../images/asterisk4.svg" alt="" />
        </div>
        <input type="text mandatoryDiv" required />
        <div class="horizontal">
          <h3>Message</h3>
          <img class="mandatory" src="../images/asterisk2.svg" alt="" />
        </div>
        <textarea rows="10" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../css/contacts.css";
</style>
