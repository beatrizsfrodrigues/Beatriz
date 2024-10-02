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
          <div class="socialArrow2">
            <p id="note5" class="notes">follow me!</p>
            <img
              src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725466846/portfolio/arrow2_km6zvg.svg"
              alt="arrow"
              id="arrow3"
            />
          </div>
          <div class="socialMedia">
            <a href="https://github.com/beatrizsfrodrigues" target="_blank"
              ><img
                src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463848/portfolio/github_dbapkc.svg"
                alt="github"
                class="github"
            /></a>
            <a
              href="https://www.linkedin.com/in/beatriz-rodrigues-aa5ba613a/"
              target="_blank"
              ><img
                src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463839/portfolio/linkedin_zmc9ak.svg"
                alt="linkedin"
                class="linkedin"
            /></a>
            <a href="https://www.behance.net/beatrizsfrodrigues" target="_blank"
              ><img
                src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463846/portfolio/behance_byor2q.svg"
                alt="behance"
                class="behance"
            /></a>
          </div>
        </div>
      </div>
      <p v-if="isTablet" class="redacted lineCont">cohrufihewuiot</p>
      <form @submit.prevent="sendEmail" method="post" enctype="text/plain">
        <div class="horizontal mandatoryDiv">
          <h3>Your e-mail</h3>
          <img
            class="mandatory"
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463840/portfolio/asterisk1_a5nuig.svg"
            alt=""
          />
        </div>
        <input v-model="email" type="email" class="mandatoryDiv" required />
        <div class="horizontal">
          <h3>Subject</h3>
          <img
            class="mandatory"
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463843/portfolio/asterisk2_wb7b3y.svg"
            alt=""
          />
        </div>
        <input v-model="subject" type="text" class="mandatoryDiv" required />
        <div class="horizontal">
          <h3>Message</h3>
          <img
            class="mandatory"
            src="https://res.cloudinary.com/dsdq3yrz5/image/upload/v1725463845/portfolio/asterisk4_nofsp1.svg"
            alt=""
          />
        </div>
        <textarea v-model="message" rows="10" required></textarea>
        <button @click="sendEmail" class="btn">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";
import emailjs from "emailjs-com";

export default {
  setup() {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const isTablet = useMediaQuery("(max-width: 1000px)");
    return { isMobile, isTablet };
  },
  data() {
    return {
      email: "",
      subject: "",
      message: "",
      serviceKey: import.meta.env.VITE_APP_SERVICE_KEY,
      templateKey: import.meta.env.VITE_APP_TEMPLATE_KEY,
      userKey: import.meta.env.VITE_APP_USER_KEY,
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        to_name: "Beatriz",
        subject: this.subject,
        from_email: this.email,
        message: this.message,
      };

      if (this.subject && this.email && this.message) {
        console.log("yes");
        emailjs
          .send(this.serviceKey, this.templateKey, templateParams, this.userKey)
          .then(
            (response) => {
              console.log(
                "Email sent successfully:",
                response.status,
                response.text,
              );
            },
            (error) => {
              console.error("Failed to send email:", error);
            },
          );

        this.email = "";
        this.subject = "";
        this.message = "";
      } else {
        console.log("no");
      }
    },
  },
};
</script>

<style>
@import "../css/contacts.css";
</style>
