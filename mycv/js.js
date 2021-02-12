$(document).ready ( function () {

    $("#choices_form").on("submit", function(e) {

        e.preventDefault();

        let choice = $('input[name=choice]:checked');
        let request_choice = choice.val();
        
        if(request_choice == 'Education'){
            show_education()
            return false
        }
        if(request_choice == 'Technical Skills'){
            show_technical_skills()
            return false
        }
        if(request_choice == 'Professional Experience'){
            show_professional_experience()
            return false
        }
        if(request_choice == 'Projects'){
            show_projects()
            return false
        }
        if(request_choice == 'Volunteering'){
            show_volunteering()
            return false
        }
        if(request_choice == 'Languages'){
            show_languages()
            return false
        }
    });
});

const show_education = () => {
    $('.container').html(`
            <div class="fields">
                <strong class="field">Education</strong><br/><br/>
                <strong>
                    • 2021 | "Academy To Industry" Programming Course –
                    " Full Stack Coding Bootcamp – python” Program Developers Institute.
                </strong><br/>
                <p class="description">
                    Program for Computer Science graduates that addresses industry-level skillsand hands-on practice.
                    JS, Python and Databases. The program includes hackathons and projects,
                    both individual and for teams. 
                </p><br/>
                <strong>
                • 2020 | Practical Software Engineering "Technion – School of Practical Engineers" 
                </strong></br><br/>
                <strong>
                • 2020 | BA Multidisciplinary Statistics "University of Haifa"  
                </strong></br></br>
                 <button onclick="window.location.reload()" type="submit" class="btn">Return To CV</button>
            </div>
        `);
}

const show_technical_skills = () => {
    $('.container').html(`
            <div class="fields">
                <strong class="field">Technical Skills</strong><br/><br/>
                <strong>
                    • Programming Languages: 
                </strong>
                <p class="description">
                    JS, Python, Java, C, C#, jQuery, Ajax. 
                </p>
                <strong>
                    • Web Technologies: 
                </strong>
                <p class="description">
                    HTML5, CSS, Bootstrap, Flask framework.  
                </p>
                <strong>
                    • Server Side and Database:  
                </strong>
                <p class="description">
                    SQL, MongoDB, Node Js, Django.  
                </p>
                <strong>
                    • Knowledge of:  
                </strong>
                <p class="description">
                    Docker, Networking.  
                </p>
                <strong>
                    • Operating System: 
                </strong>
                <p class="description">
                    Windows of all kinds, LINUX.  
                </p>
                <strong>
                    • Statistics Languages:  
                </strong>
                <p class="description">
                    R, SAS, Python for statisticians.  
                </p>
                <strong>
                    • Tools: 
                </strong>
                    <p class="description">
                        Git, working in collaboration in GitHub.  
                    </p></br>
            <button onclick="window.location.reload()" type="submit" class="btn">Return To CV</button>
            </div>
        `);
}

const show_professional_experience = () => {
    $('.container').html(`
    <div class="fields">
        <strong class="field">Professional Experience</strong><br/><br/>
        <strong>
            • 2020-2021. Tutor: 
        </strong><br/>
        <p class="description">
            Teaching all the principles of Python including checking homework's, exams and more.
        </p><br/>
        <strong>
            • 2020-2019. Banking at Bank Hapoalim-Business Center        </strong></br><br/>
        <strong>
        </br>
         <button onclick="window.location.reload()" type="submit" class="btn">Return To CV</button>
    </div>
`);
}

const show_projects = () => {
    $('.container').html(`
    <div class="fields">
        <strong class="field">Projects</strong><br/><br/>
        <strong>
            • Final Year Project "Zoo":  
        </strong><br/>
        <p class="description">
            Development of a web application that aims to teach
            preschoolers the types of animals and their features, the application is based on a server side
            developed in NodeJS express and a client side developed in JavaScript and jQuery. 
        </p><br/>
        <strong>
            • Book Store:
        </strong>
        <p class="description">
            Bookstore Website, the app is based on a server side developed in Sqlite
            and a client side developed in Python.
        </p><br/>
        <button onclick="window.location.reload()" type="submit" class="btn">Return To CV</button>
    </div>
`);
}

const show_volunteering = () => {
    $('.container').html(`
    <div class="fields">
        <strong class="field">Projects</strong><br/><br/>
        <strong>
            • 2019-Now:  
        </strong><br/>
        <p class="description">
            Development of web applications that aims to teach first grade students</br>
            <strong>– “Al Bayader Elementary School”.</strong>
            The apps include a variety of games that help the student understand in a more interactive way, math apps, matching games and more.</br>
            In the development of these applications uses: Js, jQuery, CSS, HTML, Canvas.            
        </p><br/>
        <button onclick="window.location.reload()" type="submit" class="btn">Return To CV</button>
    </div>
`);
}

const show_languages = () => {
    $('.container').html(`
    <div class="fields">
        <strong class="field"> Languages </strong><br/><br/>
        <p class="description">
            Arabic, Hebrew, English <strong> - Full professional proficiency </strong>.     
        </p><br/>
        <button onclick="window.location.reload()" type="submit" class="btn">Return To CV</button>
    </div>
`);
}