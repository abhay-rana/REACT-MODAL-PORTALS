## React Context Portal Modal

-   use of context api hook in a optimized manner
-   use of the react portal also
-   get the state of the modal also
-   close the modal by the escape key
-   solves the problems of the z-index
-   close the modal by outside click also
-   fires a function on the close of the modal
-   hide the modal by the dispatcher function also
-   close the modal by the close button provided inside the modal also
-   do not render the modal dom elements until the we specify to show the modal
-   use of context so we can call the modal so no need of the props drilling and managing states

//important props
1-> id = "dummy_id" (string) //id name is very necessary, this id attached to the which is siblings to the root div
2-> onClose={()=>{}} (function) // function , when you want to run on the closing of the modal
3-> closeButton (Boolean) (default -> true)// if you want to show the close button
4-> closeOnEscapeKey (Boolean) (default -> false) //if you want to close the modal on the "escape" key
5-> clickOutsideClose (Boolean) (default -> false) //if you want to close the modal on the click of the outside
