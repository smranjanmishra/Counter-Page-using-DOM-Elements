document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const decrementBtn = document.getElementById("decrement");
    const incrementBtn = document.getElementById("increment");
    const clearBtn = document.getElementById("clear");
    const error = document.getElementById("error");

    let count = 0;

    function updateCounter() {
        counter.innerText = count;
        if (count <= 0) {
            decrementBtn.disabled = true;
            error.classList.remove("hidden");
            clearBtn.classList.add("hidden");
        } else {
            decrementBtn.disabled = false;
            error.classList.add("hidden");
            clearBtn.classList.remove("hidden");
        }
    }

    decrementBtn.addEventListener("click", function() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    incrementBtn.addEventListener("click", function() {
        count++;
        updateCounter();
    });

    clearBtn.addEventListener("click", function() {
        count = 0;
        updateCounter();
    });

    updateCounter();
});
