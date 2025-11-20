<?php
$name = isset($_GET['name']) ? $_GET['name'] : "Customer";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Payment Successful</title>
    <style>
        body { text-align:center; font-family:Arial; margin-top:50px; }
        .box {
            border:1px solid #ccc;
            border-radius:10px;
            padding:40px;
            width:350px;
            margin:auto;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>🎉 Payment Successful!</h2>
    <p>Thank you, <strong><?php echo $name; ?></strong></p>
    <p>Your order has been received.</p>
    <br>
    <a href="index.html">Return Home</a>
</div>

</body>
</html>
