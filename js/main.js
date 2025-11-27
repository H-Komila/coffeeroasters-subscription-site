
    const bars = document.querySelector('.bars');
    const navList = document.querySelector('.nav__list');

    bars.addEventListener('click', () => {
        bars.classList.toggle('open');
        navList.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav__item .nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            bars.classList.remove('open');
            navList.classList.remove('active');
        });
    });
    

    document.addEventListener('DOMContentLoaded', function() {
            const optionItems = document.querySelectorAll('.option-item');
            const summaryText = document.getElementById('summary-text');
            const priceElement = document.getElementById('price');
            const orderBtn = document.getElementById('order-btn');
            
            // Tanlovlarni saqlash uchun obyekt
            const selections = {
                drink: null,
                type: null,
                weight: null,
                grind: null,
                delivery: null
            };
            
            // Har bir variantni tanlash uchun hodisa qo'shish
            optionItems.forEach(item => {
                item.addEventListener('click', function() {
                    const optionType = this.getAttribute('data-option');
                    const optionValue = this.getAttribute('data-value');
                    
                    // Boshqa variantlarni tanlanmagan holatga o'tkazish
                    const siblings = document.querySelectorAll(`[data-option="${optionType}"]`);
                    siblings.forEach(sibling => {
                        sibling.classList.remove('selected');
                    });
                    
                    // Joriy variantni tanlangan qilish
                    this.classList.add('selected');
                    
                    // Tanlovni saqlash
                    selections[optionType] = optionValue;
                    
                    // Xulosa va narxni yangilash
                    updateSummary();
                    updatePrice();
                });
            });
            
            // Xulosani yangilash
            function updateSummary() {
                if (Object.values(selections).every(value => value !== null)) {
                    const drinkText = getOptionText('drink', selections.drink);
                    const typeText = getOptionText('type', selections.type);
                    const weightText = getOptionText('weight', selections.weight);
                    const grindText = getOptionText('grind', selections.grind);
                    const deliveryText = getOptionText('delivery', selections.delivery);
                    
                    summaryText.innerHTML = `"Men kofemni <span>${drinkText}</span> sifatida ichaman, <span>${typeText}</span> turdagi don bilan. <span>${weightText}</span> maydalangan <span>${grindText}</span>, menga <span>${deliveryText}</span> yetkazib berilsin!"`;
                } else {
                    summaryText.innerHTML = "Sizning kofe tanlovingiz hali amalga oshirilmadi. Yuqoridagi variantlardan birini tanlang.";
                }
            }
            
            // Narxni yangilash
            function updatePrice() {
                if (Object.values(selections).every(value => value !== null)) {
                    let basePrice = 0;
                    
                    // Og'irlik bo'yicha narx
                    if (selections.weight === '250') basePrice = 7.20;
                    else if (selections.weight === '500') basePrice = 13.00;
                    else if (selections.weight === '1000') basePrice = 22.00;
                    
                    // Yetkazib berish chastotasi bo'yicha chegirma
                    if (selections.delivery === '2weeks') basePrice *= 0.9; // 10% chegirma
                    else if (selections.delivery === 'month') basePrice *= 0.8; // 20% chegirma
                    
                    priceElement.textContent = `$${basePrice.toFixed(2)}`;
                } else {
                    priceElement.textContent = '$0.00';
                }
            }
            
            // Variant qiymatlariga mos matnlarni olish
            function getOptionText(type, value) {
                const texts = {
                    drink: {
                        capsule: 'Kapsula',
                        filter: 'Filtr',
                        espresso: 'Espresso'
                    },
                    type: {
                        single: 'Yagona Kelib Chiqishi',
                        decaf: 'Kafeinsiz',
                        blended: 'Aralashma'
                    },
                    weight: {
                        250: '250g',
                        500: '500g',
                        1000: '1000g'
                    },
                    grind: {
                        wholebean: 'Butun Don',
                        filter: 'Filtr',
                        cafetiere: 'Kafetier'
                    },
                    delivery: {
                        week: 'har hafta',
                        '2weeks': 'har 2 haftada',
                        month: 'har oy'
                    }
                };
                
                return texts[type][value];
            }
            
            // Buyurtma tugmasi bosilganda
            orderBtn.addEventListener('click', function() {
                if (Object.values(selections).every(value => value !== null)) {
                    alert('Buyurtmangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
                } else {
                    alert('Iltimos, barcha variantlarni tanlang!');
                }
            });
        });
