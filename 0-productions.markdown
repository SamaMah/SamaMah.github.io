---
layout: default
title: Productions
permalink: /productions/
thumbnail: /assets/img/thumbnails/ninja_express_001.png
order: 1
---

<section class="showreel-section">
<div class="custom-video">
  <iframe 
    id="vimeo-video" 
    src="https://player.vimeo.com/video/1074265087?h=755017a237&title=0&byline=0&portrait=0&controls=1"
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
</section>

<section class="productions-section">

  <div class="productions-grid">
    {% for production in site.data.productions %}
      <div class="production-card">
        <img src="{{ production.image }}" alt="{{ production.title }} poster" class="production-poster">
        <div class="production-info">
          <h2>{{ production.title }}</h2>
          <p><strong>Role:</strong> {{ production.role }}</p>
          <p><strong>Type:</strong> {{ production.type }}</p>
          <p><strong>Year:</strong> {{ production.year }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>