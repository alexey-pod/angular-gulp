<div class="item_page">
	<div class="left_menu">
		<ul>
			<li class="main">
				<a href="/">Main page</a>
			</li>
			<li class="error">
				<a href="/error_page/">Error page</a>
			</li>
			<li class="error">
				<a href="/book/999999999999999999/">Book error page</a>
			</li>
			<li ng-repeat="item in book_array" ng-class="{selected: item.id==id}">
				<a href="/book/{{item.id}}/">{{item.title.default}}</a>
			</li>
		</ul>
	</div>
	<div class="book_item">
		<div class="content">
			<h1>{{book_item.title.default}}</h1>
			<div class="main_info">
				<div class="left">
					<image_checker file="https://storage.aggregion.com/api/files/{{book_item.cover}}/shared/data"></image_checker>
				</div>
				<div class="right">
					<ul>
						<li><span class="ch">owner:</span> {{book_item.owner}}</li>
						<li><span class="ch">contentType:</span> {{book_item.contentType}}</li>
						<li><span class="ch">publishingStatus:</span> {{book_item.publishingStatus}}</li>
						<li><span class="ch">maxKeys:</span> {{book_item.maxKeys}}</li>
						<li><span class="ch">platformSupport:</span> {{book_item.platformSupport | join}}</li>
					</ul>
					<div class="options" ng-if="book_item.options">
						<div class="title">Options:</div>
						<div ng-bind-html="book_item.options | toList | html"></div>
					</div>
				</div>
			</div>
			<div class="add_info" >
				{{book_item.description.default}}
			</div>
			<div class="bundles" ng-if="bundle_array">
				<div class="title">Bundles</div>
				<table class="o_table">
					<tr class="header">
						<!--<td>id</td>-->
						<td>version</td>
						<td>owner</td>
						<td>catalog</td>
						<!--<td>resourceId</td>-->
						<td>status</td>
					</tr>
					<tr ng-repeat="item in bundle_array">
						<!--<td>{{item.id}}</td>-->
						<td>{{item.version}}</td>
						<td>{{item.owner}}</td>
						<td>{{item.catalog}}</td>
						<!--<td>{{item.resourceId}}</td>-->
						<td>{{item.status}}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>