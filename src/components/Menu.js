function Menu(props) {
    let page = props.currentPage;
    return (
        <nav>
            <ul>
                <li className='nav-brand'>GradeWizard</li>
                <li className='nav-item'>Assignments</li>
                <li className='nav-item'>Students</li>
            </ul>
        </nav>
    )
}

export default Menu;