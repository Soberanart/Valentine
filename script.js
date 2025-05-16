const noButton = document.getElementById("no-button"); //id="no-button"
    noButton.addEventListener("mouseover", () => {
        const questionContainer = document.getElementById("question-container"); //id="question-container"
        const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
        const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

        noButton.style.position = "absolute";
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
});

const yesButton = document.getElementById("yes-button"); //id: yes-button
    yesButton.addEventListener("click", () => {
        //Mostra a tela de carregamento e esconde a inicial
        document.getElementById("initial-screen").style.display = "none";
        document.getElementById("loader-screen").style.display = "flex";
        
        setTimeout (() => {
            document.getElementById("loader-screen").style.display = "none";
            document.getElementById("final-screen").style.display = "flex";

            const gifResult = document.getElementById("gif-result");
            gifResult.play(); //arquivo de video na pagin final
        }, 3000);
});

const ReturnScreen = () => {
    document.getElementById("final-screen").style.display = "none";
    document.getElementById("initial-screen").style.display = "flex";
};