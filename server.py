from flask import Flask, render_template

# Initialize the Flask application
# The 'template_folder' argument tells Flask where to find your HTML files.
# The 'static_folder' argument tells Flask where to find your CSS, JS, and image files.
app = Flask(__name__, template_folder='templates', static_folder='static')

# Define a route for the home page
@app.route('/')
def index():
    """Renders the home page."""
    return render_template('index.html')

# Define a route for the about page
@app.route('/about')
def about():
    """Renders the about page."""
    return render_template('about.html')

# Define a route for the committee page
@app.route('/committee')
def committee():
    """Renders the committee page."""
    return render_template('committee.html')

# Define a route for the important dates page
@app.route('/dates')
def dates():
    """Renders the important dates page."""
    return render_template('dates.html')

# Define a route for the paper submission page
@app.route('/submission')
def submission():
    """Renders the paper submission page."""
    return render_template('submission.html')

# Define a route for the themes page
@app.route('/themes')
def themes():
    """Renders the themes page."""
    return render_template('themes.html')

# Define a route for the registration page
@app.route('/registration')
def registration():
    """Renders the registration page."""
    return render_template('registration.html')

# Define a route for the venue page
@app.route('/venue')
def venue():
    """Renders the venue page."""
    return render_template('venue.html')

# Define a route for the contact page
@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template('contact.html')

# This block ensures the server runs only when the script is executed directly
if __name__ == '__main__':
    # The 'debug=True' argument enables debug mode, which provides helpful error messages
    # and automatically reloads the server when you make changes to the code.
    app.run(debug=True,host='0.0.0.0', port=8000)
