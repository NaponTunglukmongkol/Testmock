function SideNavPopUp(props) {
    return (
        <div id={props.id} className={props.id + ' prompt'}>
            <svg role="img" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 hDgDGI">
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <div className='d-flex flex-row-reverse'>
                <button className='btn btn-light'>LOG IN</button>
                <button onClick={() => props.onClick()} className='btn primary'>NOT NOW</button>
            </div>
        </div>
    );
}

export default SideNavPopUp;