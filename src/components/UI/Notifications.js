
const Notifications=(props)=>{
    let specialClasses = '';
    if(props.status === 'error'){
        specialClasses = classes.error;
    }
    if(props.status === 'success'){
        specialClasses = classes.success;
    }
    const cssClasses = `${classes.Notifications} ${specialClasses}`;
    return(
        <section>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}
export default Notifications;