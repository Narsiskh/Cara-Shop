<script setup>

</script>

<template>
  <section id="page-header" class="contact-header d-flex flex-column justify-content-center w-100">
    <h2>#lets_talk</h2>
    <p>LEAVE A MESSAGE.We love to hear from you!</p>
  </section>

  <section id="contact-details" class="section-p1 d-flex align-items-center justify-content-between">
    <div class="details">
      <span>GET IN TOUCH</span>
      <h2>Visit one of our agency locations or contact us today</h2>
      <h3>Head Office</h3>
      <div>
        <li>
          <i class="bi bi-map"></i>
          <p>56 Glassford Street Glasgow G1 1UL New York</p>
        </li>
        <li>
          <i class="bi bi-envelope"></i>
          <p>contact@example.com</p>
        </li>
        <li>
          <i class="bi bi-telephone"></i>
          <p>contact@example.com</p>
        </li>
        <li>
          <i class="bi bi-clock"></i>
          <p>Monday to Saturday: 9.00am to 16.pm</p>
        </li>
      </div>
    </div>

    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19758.47186418411!2d-1.2904157!3d51.7548164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2snl!4v1697555206693!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>

  <section id="form-details" class="d-flex justify-content-between">
    <form class="d-flex flex-column align-items-start" action="">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input type="text" placeholder="Your Name">
      <input type="text" placeholder="E-mail">
      <input type="text" placeholder="Subject">
      <textarea name="" id="" col="30" rows="10" placeholder="Your Message"></textarea>
      <button class="normal">Submit</button>
    </form>

    <div class="people">
      <div class="d-flex align-items-start">
        <img src="../img/people/1.png" alt="">
        <p><span class="d-block">John Doe</span> Senior Marketing Manager <br> Phone: + 000 123 000 77 88 <br>E-mail: contact@example.com </p>
      </div>
      <div class="d-flex align-items-start">
        <img src="../img/people/2.png" alt="">
        <p><span class="d-block">William Smith</span> Senior Marketing Manager <br> Phone: + 000 123 000 77 88 <br>E-mail: contact@example.com </p>
      </div>
      <div class="d-flex align-items-start">
        <img src="../img/people/3.png" alt="">
        <p><span class="d-block">Emma Stan</span> Senior Marketing Manager <br> Phone: + 000 123 000 77 88 <br>E-mail: contact@example.com </p>
      </div>
    </div>
  </section>
</template>

<style src="../assets/contact.sass" scoped lang="sass"></style>