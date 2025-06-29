// Artist's Talk Module
// Renders artist interviews, Q&A, studio photos, awards, and testimonials

window.renderArtistTalk = function(artist) {
    const lang = window.currentLanguage || 'zh';
    const talkData = artist.artistTalk && artist.artistTalk[lang] ? artist.artistTalk[lang] : [];
    const container = document.createElement('div');
    container.className = 'artist-talk-section bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200';
    container.innerHTML = `<h2 class="text-2xl font-bold mb-4 font-serif accent-text">Artist's Talk</h2>`;
    if (!talkData.length) {
        container.innerHTML += `<p class="text-gray-600">No artist talk content available.</p>`;
        return container;
    }
    talkData.forEach(item => {
        if (item.type === 'video') {
            container.innerHTML += `<div class="mb-6"><span class="font-semibold">${item.title}:</span><br><video src="${item.url}" controls width="400" class="rounded shadow"></video></div>`;
        } else if (item.type === 'qna') {
            container.innerHTML += `<div class="mb-6"><span class="font-semibold text-accent-text">Q:</span> <span class="text-gray-800">${item.question}</span><br><span class="font-semibold text-accent-text">A:</span> <span class="text-gray-700">${item.answer}</span></div>`;
        } else if (item.type === 'award') {
            container.innerHTML += `<div class="mb-6"><span class="font-semibold">🏆 ${item.title}</span> <span class="text-gray-500">(${item.year})</span></div>`;
        } else if (item.type === 'testimonial') {
            container.innerHTML += `<div class="mb-6 italic border-l-4 accent-border pl-4"><span class="font-semibold">${item.author}:</span> <span class="text-gray-700">${item.text}</span></div>`;
        } else if (item.type === 'photo') {
            container.innerHTML += `<div class="mb-6"><span class="font-semibold">${item.title}:</span><br><img src="${item.url}" alt="${item.title}" class="rounded shadow-md mt-2" width="400"></div>`;
        }
    });
    return container;
}; 